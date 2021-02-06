import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogFormData } from '../../models/dialogFormData';
import { FormContainerComponent } from '../form-container/form-container.component';

@Component({
  selector: 'lab900-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent<T> {
  @ViewChild(FormContainerComponent)
  public formContainer: FormContainerComponent<T>;

  public dialogFormData: DialogFormData<T>;
  public loading = false;
  public error: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogFormData<T>, private dialogRef: MatDialogRef<FormDialogComponent<T>>) {
    this.dialogFormData = data;
  }

  submit(item: T) {
    this.loading = true;
    this.error = null;
    this.dialogFormData
      .submit(item, this.formContainer?.form)
      .catch((error) => (this.error = error))
      .then((result) => (result ? this.dialogRef.close() : (this.error = 'Oops. An error occured.')))
      .finally(() => (this.loading = false));
  }
}
