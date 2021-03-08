import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlertDialog } from '../../models/alertDialog';

@Component({
  selector: 'lab900-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent {
  public message = '';
  public messageHTML = '';
  public buttonText = 'Ok';
  constructor(@Inject(MAT_DIALOG_DATA) private data: AlertDialog, private dialogRef: MatDialogRef<AlertDialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
      this.buttonText = data.okButtonText || this.buttonText;
      this.messageHTML = data.messageHTML || this.messageHTML;
    }
    this.dialogRef.updateSize('300vw', '300vw');
  }

  public onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
