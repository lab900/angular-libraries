import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

export interface SharingDialogData {
  users?: any[];
  onShareFn?: (data: any) => any;
  userLabelFn?: (user: any) => string;
  userImageFn?: (user: any) => string;
}

export abstract class ShareDialogComponent {
  public constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: SharingDialogData,
  ) {}
}
