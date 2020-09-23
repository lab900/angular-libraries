import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslatableFormDialogComponent } from '../components/translatable-form-dialog/translatable-form-dialog.component';
import { Schema } from '../models/schema';

@Directive({
  selector: '[lab900TranslatableFormDialog]',
})
export class TranslatableFormDialogDirective<T> {
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

  public constructor(public dialog: MatDialog) {}

  @HostListener('click') onMouseEnter(): void {
    const dialog = this.dialog.open(TranslatableFormDialogComponent, {
      data: {
        schema: this.schema,
        data: this.data,
        submit: this.submitFormHandler,
        get: this.getHandler,
        create: this.create,
      },
    });
    dialog
      .beforeClosed()
      .subscribe((data) => {})
      .unsubscribe();
  }
}
