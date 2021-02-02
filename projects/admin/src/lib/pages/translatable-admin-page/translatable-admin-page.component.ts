import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Schema } from '../../models/schema';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TranslatableDataService } from '../../models/translatableDataService';
import { Item, Page } from '../../models/page';

@Component({
  selector: 'lab900-translatable-admin-page',
  templateUrl: './translatable-admin-page.component.html',
  styleUrls: ['./translatable-admin-page.component.scss'],
})
export class TranslatableAdminPageComponent implements OnInit, OnDestroy {
  @Input() schema: Schema;
  @Input() dataService: TranslatableDataService;
  @Input() dialogOptions: MatDialogConfig;

  public error: string;
  public loading = false;
  public pageInfo: { currentPage: number; pageSize: number; hasMore?: boolean };

  private subscriptions: Subscription[] = [];
  public currentPage: Page<Item>;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.pageInfo = {
      currentPage: 1,
      pageSize: this.dataService.defaultPageSize(),
    };

    this.loadData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
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

  getHandler = async (id: any, language: string): Promise<object> => {
    try {
      const object = await this.dataService.getByIdAndLanguage(id, language);
      return object;
    } catch (e) {
      return null;
    }
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
