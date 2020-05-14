import { NgModule } from '@angular/core';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { DateDisplayComponent } from './components/date-display/date-display.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';


@NgModule({
  declarations: [AdminPageComponent, AdminTableComponent, AdminEditComponent, AlertDialogComponent, ConfirmationDialogComponent, DateDisplayComponent, ImageDisplayComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressSpinnerModule
  ],
  exports: [ AdminPageComponent, AlertDialogComponent, ConfirmationDialogComponent]
})

export class AngularAdminModule { }
