type propFunction<T> = (data: T) => string;

export interface DataListItemAction<T = any> {
  icon: propFunction<T> | string;
  label?: propFunction<T> | string;
  action?: (data: T) => any;
  subActions?: DataListItemAction<T>[];
}
