import { Component, Input, OnInit } from '@angular/core';
import { Schema } from '../../models/schema';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../models/dataService';
import { Item, Page } from '../../models/page';

@Component({
  selector: 'lab900-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  @Input() schema: Schema;
  @Input() dataService: DataService;

  public error: string;
  public loading = false;
  public pageInfo: { currentPage: number; pageSize: number; hasMore?: boolean };

  public currentPage: Page<Item>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.pageInfo = {
      currentPage: 1,
      pageSize: this.dataService.defaultPageSize(),
    };

    this.loadData();
  }

  loadData() {
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

  onPageEvent(pageEvent: PageEvent) {
    this.pageInfo.currentPage = pageEvent.pageIndex + 1;
    this.loadData();
  }

  editHandler = async (item: Item): Promise<boolean> => {
    this.loading = true;
    await this.dataService.update(item);
    this.loadData();
    return true;
  };

  createHandler = async (item: object): Promise<string> => {
    this.loading = true;
    const newId = await this.dataService.create(item);
    this.loadData();
    return newId;
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
