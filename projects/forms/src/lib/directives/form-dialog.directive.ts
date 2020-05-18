import { ComponentFactoryResolver, Directive, HostListener, Input, ViewContainerRef } from '@angular/core';
import { FormDialogComponent } from '../components/dialogs/form-dialog/form-dialog.component';
import { Form } from '../models/Form';
import { MatDialog } from '@angular/material/dialog';

@Directive({
  selector: '[lab900FormDialog]',
})
export class FormDialogDirective<T> {
  @Input() schema: Form;
  @Input() data: T;
  @Input() submitFormHandler: (data: T) => Promise<boolean>;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef, public dialog: MatDialog) {}

  @HostListener('click') onMouseEnter() {
    const dialog = this.dialog.open(FormDialogComponent, {
      data: {
        schema: this.schema,
        data: this.data,
        submit: this.submitFormHandler,
      },
    });

    dialog.beforeClosed().subscribe((data) => {});
  }
}
