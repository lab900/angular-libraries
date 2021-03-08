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
  @Input() public schema: Schema;
  @Input() public dataService: TranslatableDataService;
  @Input() public dialogOptions: MatDialogConfig;

  public error: string;
  public loading = false;
  public pageInfo: { currentPage: number; pageSize: number; hasMore?: boolean };

  private subscriptions: Subscription[] = [];
  public currentPage: Page<Item>;

  constructor(public dialog: MatDialog) {}

  public ngOnInit(): void {
    this.pageInfo = {
      currentPage: 1,
      pageSize: this.dataService.defaultPageSize(),
    };

    this.loadData();
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
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

  public getHandler = async (id: any, language: string): Promise<object> => {
    try {
      return await this.dataService.getByIdAndLanguage(id, language);
    } catch (e) {
      return null;
    }
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
