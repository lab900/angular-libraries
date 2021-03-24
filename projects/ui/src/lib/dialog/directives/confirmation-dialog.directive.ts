import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { SubscriptionBasedDirective } from '../../common/directives/subscription-based.directive';

@Directive({
  selector: '[lab900ConfirmationDialog]',
})
export class ConfirmationDialogDirective extends SubscriptionBasedDirective {
  @Input() public message: string;
  @Input() public okButtonText: string;
  @Input() public cancelButtonText: string;

  @Output() public confirmed: EventEmitter<void> = new EventEmitter<void>();
  @Output() public cancelled: EventEmitter<void> = new EventEmitter<void>();

  constructor(public dialog: MatDialog) {
    super();
  }

  @HostListener('click') public onMouseEnter(): void {
    const dialog = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: this.message,
        okButtonText: this.okButtonText,
        cancelButtonText: this.cancelButtonText,
      },
    });
    this.addSubscription(dialog.beforeClosed(), (data) => {
      if (data) {
        this.confirmed.emit();
      } else {
        this.cancelled.emit();
      }
    });
  }
}
