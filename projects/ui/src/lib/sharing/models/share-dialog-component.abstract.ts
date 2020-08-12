export interface SharingDialogData {
  users: any[];
  shareObject: any;
  onShareFn: (shareObject: any, users: any[]) => any;
  userLabelFn?: (user: any) => string;
  userImageFn?: (user: any) => string;
}

export abstract class ShareDialogComponent {
  public constructor(public data: SharingDialogData) {}
}
