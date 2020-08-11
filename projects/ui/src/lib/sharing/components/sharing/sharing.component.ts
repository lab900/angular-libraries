import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
  public shareDialogTemplate: any;

  @Input()
  public userLabelFn: (user: any) => string;

  @Input()
  public userImageFn: (user: any) => string;

  public get toDisplay(): any[] {
    return this.users.slice(0, this.previewCount);
  }

  public get others(): string {
    const others = this.users.length - this.previewCount;
    return others > 0 ? `+${others}` : null;
  }

  public constructor(private matDialog: MatDialog) {}

  public openDialog(): void {
    this.matDialog.open(this.shareDialogTemplate);
  }
}
