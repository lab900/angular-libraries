import { Directive, HostListener, Input } from '@angular/core';
import { FormDialogComponent } from '../components/form-dialog/form-dialog.component';
import { Form } from '../models/Form';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Directive({
  selector: '[lab900FormDialog]',
})
export class FormDialogDirective<T> {
  @Input()
  public schema: Form;

  @Input()
  public data: T;

  @Input()
  public submitFormHandler: (data: T) => Promise<boolean>;

  @Input()
  public dialogOptions: MatDialogConfig;

  public constructor(public dialog: MatDialog) {}

  @HostListener('click') onMouseEnter(): void {
    const dialog = this.dialog.open(FormDialogComponent, {
      data: {
        schema: this.schema,
        data: this.data,
        submit: this.submitFormHandler,
      },
      ...this.dialogOptions,
    });
    dialog.beforeClosed().subscribe((data) => {});
  }
}
