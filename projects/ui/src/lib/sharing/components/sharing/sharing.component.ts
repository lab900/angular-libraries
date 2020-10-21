import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent, SharingDialogData } from '../../models/share-dialog-component.abstract';
import { ComponentType } from '@angular/cdk/portal';

const materialIconBase64 =
  'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>';

@Component({
  selector: 'lab900-sharing',
  templateUrl: './sharing.component.html',
  styleUrls: ['./sharing.component.scss'],
})
export class Lab900SharingComponent {
  @Input()
  public shareObject: any;

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

  /**
   * Add a placeholder image if userImageFn is not provided or the image has an error
   */
  @Input()
  public userImageBackup: string = materialIconBase64;

  @Input()
  public onShareFn?: (shareObject: any, users: any[]) => any;

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
      shareObject: this.shareObject,
      onShareFn: this.onShareFn,
      userImageFn: this.userImageFn,
      userLabelFn: this.userLabelFn,
    };
    this.matDialog.open(this.shareDialogTemplate, { data });
  }

  public getUserImage(user: any): string {
    const images = [];
    if (user && this.userImageFn) {
      const image = this.userImageFn(user);
      if (image) {
        images.push(`url('${image}')`);
      }
    }
    if (this.userImageBackup) {
      images.push(`url('${this.userImageBackup}')`);
    }
    return images.join(', ');
  }
}
