import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialog } from '../../models/confirmationDialog';

@Component({
  selector: 'lab900-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  public message = 'Are you sure?';
  public confirmButtonText = 'Yes';
  public cancelButtonText = 'Cancel';
  constructor(@Inject(MAT_DIALOG_DATA) private data: ConfirmationDialog, private dialogRef: MatDialogRef<ConfirmationDialogComponent>) {
    if (data) {
      this.message = data.message || this.message;
      this.confirmButtonText = data.okButtonText || this.confirmButtonText;
      this.cancelButtonText = data.cancelButtonText || this.cancelButtonText;
    }
  }

  public onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
