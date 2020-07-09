import { NgModule } from '@angular/core';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogDirective } from './directives/confirmation-dialog.directive';

@NgModule({
  declarations: [AlertDialogComponent, ConfirmationDialogComponent, ConfirmationDialogDirective],
  imports: [MatDialogModule, MatButtonModule],
  exports: [AlertDialogComponent, ConfirmationDialogComponent, ConfirmationDialogDirective],
})
export class DialogModule {}
