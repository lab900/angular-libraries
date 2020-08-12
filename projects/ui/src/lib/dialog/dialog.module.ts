import { NgModule } from '@angular/core';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogDirective } from './directives/confirmation-dialog.directive';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AlertDialogComponent, ConfirmationDialogComponent, ConfirmationDialogDirective],
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
  exports: [AlertDialogComponent, ConfirmationDialogComponent, ConfirmationDialogDirective],
})
export class DialogModule {}
