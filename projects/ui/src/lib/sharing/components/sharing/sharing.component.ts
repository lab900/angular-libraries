import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent, SharingDialogData } from '../../models/share-dialog-component.abstract';
import { ComponentType } from '@angular/cdk/portal';

@Component({
  selector: 'lab900-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.scss'],
})
export class Lab900SharingComponent {
  @Input()
  public users: any[] = [];

  @Input()
  public previewCount = 3;

  @Input()
  public openShareDialogIcon = 'add_circle_outline';

  @Input()
  public shareDialogTemplate: ComponentType<ShareDialogComponent>;

  @Input()
  public userLabelFn: (user: any) => string;

  @Input()
  public userImageFn: (user: any) => string;

  @Input()
  public onShareFn?: (data: any) => any;

  public get toDisplay(): any[] {
    return this.users.slice(0, this.previewCount);
  }

  public get others(): string {
    const others = this.users.length - this.previewCount;
    return others > 0 ? `+${others}` : null;
  }

  public constructor(private matDialog: MatDialog) {}

  public openDialog(): void {
    const data: SharingDialogData = {
      users: this.users,
      onShareFn: this.onShareFn,
      userImageFn: this.userImageFn,
      userLabelFn: this.userLabelFn,
    };
    this.matDialog.open(this.shareDialogTemplate, { data });
  }
}
