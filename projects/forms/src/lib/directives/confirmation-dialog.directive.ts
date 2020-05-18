import { ComponentFactoryResolver, Directive, EventEmitter, HostListener, Input, Output, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/dialogs/confirmation-dialog/confirmation-dialog.component';

@Directive({
  selector: '[lab900ConfirmationDialog]',
})
export class ConfirmationDialogDirective {
  @Input() message: string;
  @Input() okButtonText: string;
  @Input() cancelButtonText: string;

  @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef, public dialog: MatDialog) {}

  @HostListener('click') onMouseEnter() {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: this.message,
        okButtonText: this.okButtonText,
        cancelButtonText: this.cancelButtonText,
      },
    });

    dialog.beforeClosed().subscribe((data) => {
      this.confirmed.emit(!!data);
    });
  }
}
