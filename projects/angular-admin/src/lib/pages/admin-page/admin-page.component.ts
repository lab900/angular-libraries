import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Schema } from '../../models/schema';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AdminEditComponent } from '../../components/admin-edit/admin-edit.component';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { Subscription } from 'rxjs';
import { DataService } from '../../models/dataService';

@Component({
  selector: 'lab900-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, OnDestroy {

  public items: any[];
  @Input() schema: Schema;
  @Input() dataService: DataService;
  public error: string;
  public loading = false;
  private pageInfo: { currentPage: number, pageSize: number};

  private subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.pageInfo = {
      currentPage: 1,
      pageSize: this.dataService.defaultPageSize()
    };
    this.loadData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadData() {
    this.loading = true;
    this.items = [];
    this.dataService.getPage(this.pageInfo.currentPage,this.pageInfo.pageSize)
      .then(page => {
        this.items = page.items;
        this.loading = false;
      })
      .catch(err => {
        console.log(err);
        this.error = 'Oops, something went wrong'
      })
      .finally(() => this.loading = false);
  }

  onPageEvent(pageEvent: PageEvent) {
    console.log('Loading page');
    console.log(pageEvent);
    this.pageInfo.currentPage = pageEvent.pageIndex+1;
    this.loadData();
  }

  onCreate() {
    const dialogRef = this.dialog.open(AdminEditComponent, {
      width: '250px',
      data: { schemaFields: this.schema.fields }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  onEdit(item:any) {
    const dialogRef = this.dialog.open(AdminEditComponent, {
      width: '250px',
      data: { schemaFields: this.schema.fields, data: item }
    });
    const afterClosed = dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
    this.subscriptions.push(afterClosed);
  }

  onDelete(item:any) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });

    const afterClosed = dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.loading = true;
        this.dataService.delete(item)
          .then(() => this.loadData())
          .catch(err => {
            console.log(err);
            this.error = 'Oops, something went wrong.';
            this.loading = false
          })
      }
    });
    this.subscriptions.push(afterClosed);
  }


}
