export interface DataListSharing {
  userLabelFn: (user: any) => string;
  userImageFn: (user: any) => string;
  sharedUsersFn: (data: any) => any[];
  onShareFn?: (shareObject: any, users: any[]) => any;
  shareDialogTemplate?: any;
}
