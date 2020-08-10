export interface DataListItemAction<T = any> {
  icon: string;
  label?: string;
  action?: (data: T) => any;
  subActions?: DataListItemAction<T>[];
}
