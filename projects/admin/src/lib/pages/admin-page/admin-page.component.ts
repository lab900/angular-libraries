import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Schema, SchemaConverter } from '../../models/schema';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DataService } from '../../models/dataService';
import { Item } from '../../models/page';
import { Form } from '@lab900/forms';

@Component({
  selector: 'lab900-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit, OnDestroy {
  @Input() schema: Schema;
  @Input() dataService: DataService;

  public items: any[];
  public error: string;
  public loading = false;
  public editForm: Form;

  private pageInfo: { currentPage: number; pageSize: number };
  private subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.pageInfo = {
      currentPage: 1,
      pageSize: this.dataService.defaultPageSize(),
    };

    this.editForm = SchemaConverter.toForm(this.schema);

    this.loadData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  loadData() {
    this.loading = true;
    this.items = [];
    this.dataService
      .getPage(this.pageInfo.currentPage, this.pageInfo.pageSize)
      .then((page) => {
        this.items = page.items;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
        this.error = 'Oops, something went wrong';
      })
      .finally(() => (this.loading = false));
  }

  onPageEvent(pageEvent: PageEvent) {
    console.log('Loading page');
    console.log(pageEvent);
    this.pageInfo.currentPage = pageEvent.pageIndex + 1;
    this.loadData();
  }

  editHandler = async (item: any): Promise<boolean> => {
    console.log('updating item ');
    console.log(item);
    this.loading = true;
    await this.dataService.update(item as Item);
    this.loadData();
    return true;
  };

  onDelete(item: any) {
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
