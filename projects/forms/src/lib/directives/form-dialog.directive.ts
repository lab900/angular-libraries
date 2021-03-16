import { Directive, HostListener, Input } from '@angular/core';
import { FormDialogComponent } from '../components/form-dialog/form-dialog.component';
import { Form } from '../models/Form';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SubscriptionBasedDirective } from './subscription-based.directive';

@Directive({
  selector: '[lab900FormDialog]',
})
export class FormDialogDirective<T> extends SubscriptionBasedDirective {
  @Input()
  public schema: Form;

  @Input()
  public data: T;

  @Input()
  public submitFormHandler: (data: T, originalData?: T) => Promise<boolean>;

  @Input()
  public dialogOptions: MatDialogConfig;

  @Input()
  public disabled = false;

  public constructor(public dialog: MatDialog) {
    super();
  }

  @HostListener('click') public onMouseEnter(): void {
    if (this.disabled) {
      return;
    }
    const dialog = this.dialog.open(FormDialogComponent, {
      data: {
        schema: this.schema,
        data: this.data,
        submit: this.submitFormHandler,
      },
      ...this.dialogOptions,
    });
    this.addSubscription(dialog.beforeClosed(), (data) => {});
  }
}
