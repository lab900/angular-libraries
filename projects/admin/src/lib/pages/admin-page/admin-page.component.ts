import { Component, Input, OnInit } from '@angular/core';
import { Schema, SchemaConverter } from '../../models/schema';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataService } from '../../models/dataService';
import { Item, Page } from '../../models/page';
import { Form } from '@lab900/forms';

@Component({
  selector: 'lab900-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  @Input() public schema: Schema;
  @Input() public dataService: DataService;
  @Input() public dialogOptions: MatDialogConfig;

  public error: string;
  public loading = false;
  public pageInfo: { currentPage: number; pageSize: number; hasMore?: boolean };
  public editForm: Form;
  public createForm: Form;

  public currentPage: Page<Item>;

  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.pageInfo = {
      currentPage: 1,
      pageSize: this.dataService.defaultPageSize(),
    };

    this.editForm = SchemaConverter.toForm(this.schema, false);
    this.createForm = SchemaConverter.toForm(this.schema, true);

    this.loadData();
  }

  public loadData(): void {
    this.loading = true;
    this.dataService
      .getPage(this.pageInfo.currentPage, this.pageInfo.pageSize)
      .then((page) => {
        this.currentPage = page;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        this.error = 'Oops, something went wrong';
      })
      .finally(() => (this.loading = false));
  }

  public onPageEvent(pageEvent: PageEvent): void {
    this.pageInfo.currentPage = pageEvent.pageIndex + 1;
    this.loadData();
  }

  public editHandler = async (item: Item): Promise<boolean> => {
    this.loading = true;
    await this.dataService.update(item);
    this.loadData();
    return true;
  };

  public createHandler = async (item: object): Promise<string> => {
    this.loading = true;
    const newId = await this.dataService.create(item);
    this.loadData();
    return newId;
  };

  public onDelete(item: any): void {
    this.loading = true;
    this.dataService
      .delete(item)
      .then(() => this.loadData())
      .catch((err) => {
        console.log(err);
        this.error = 'Oops, something went wrong.';
        this.loading = false;
      });
  }
}
