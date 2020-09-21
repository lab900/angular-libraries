type propFunction<T> = (data: T) => string;

export interface DataListItemAction<T = any> {
  icon: propFunction<T> | string;
  label?: propFunction<T> | string;
  action?: (data: T) => any;
  subActions?: DataListItemAction<T>[];
  hide?: boolean;
}

export interface DataListSharing {
  userLabelFn: (user: any) => string;
  userImageFn: (user: any) => string;
  sharedUsersFn: (data: any) => any[];
  onShareFn?: (shareObject: any, users: any[]) => any;
  shareDialogTemplate?: any;
}
