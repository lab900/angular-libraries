import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Schema } from '../../models/schema';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AdminEditComponent } from '../../components/admin-edit/admin-edit.component';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lab900-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, OnDestroy {

  public items: any[];
  @Input() schema: Schema;
  public error: string;
  public loading = false;

  private subscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadData() {
    this.loading = true;
    this.schema.crudService.getPage(1,20)
      .then(page => {
        this.items = page.items;
        console.log(page.items);
        this.loading = false;
      })
      .catch(err => {
        this.error = 'Oops, something went wrong'
      })
      .finally(() => this.loading = false);
  }

  onPageEvent(pageEvent: PageEvent) {
    console.log('Loading page');
    console.log(pageEvent);
  }

  onCreate() {
    console.log('show dialog to create');

    const dialogRef = this.dialog.open(AdminEditComponent, {
      width: '250px',
      data: { schemaFields: this.schema.fields }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.loadData();
    });
  }

  onEdit(item:any) {
    console.log('show dialog to edit');
    console.log(item);

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
    console.log('show dialog to delete');
    console.log(item);
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
        this.schema.crudService.delete(item)
          .then(() => this.loading = false )
          .catch(err => {
            console.log(err);
            this.error = 'Oops, something went wrong.';
          })
          .finally(() => this.loading = false);
      }
    });
    this.subscriptions.push(afterClosed);
  }


}
