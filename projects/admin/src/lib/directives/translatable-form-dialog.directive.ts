import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TranslatableFormDialogComponent } from '../components/translatable-form-dialog/translatable-form-dialog.component';
import { Schema } from '../models/schema';
import { SubscriptionBasedDirective } from '../../../../shared/directives/subscription-based.directive';

@Directive({
  selector: '[lab900TranslatableFormDialog]',
})
export class TranslatableFormDialogDirective<T> extends SubscriptionBasedDirective {
  @Input()
  public schema: Schema;

  @Input()
  public data: T;

  @Input()
  public create: boolean;

  @Input()
  public submitFormHandler: (data: T) => Promise<boolean>;

  @Input()
  public getHandler: (id: any, language: string) => Promise<T>;

  @Input()
  public dialogOptions: MatDialogConfig;

  public constructor(public dialog: MatDialog) {
    super();
  }

  @HostListener('click')
  public onMouseEnter(): void {
    const dialog = this.dialog.open(TranslatableFormDialogComponent, {
      data: {
        schema: this.schema,
        data: this.data,
        submit: this.submitFormHandler,
        get: this.getHandler,
        create: this.create,
      },
      ...this.dialogOptions,
    });
    this.addSubscription(dialog.beforeClosed(), (data) => {});
  }
}
