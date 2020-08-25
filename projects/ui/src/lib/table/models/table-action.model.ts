type propFunction<T> = (data: T) => string;

export interface TableAction<T = any> {
  label: propFunction<T> | string;
  action: (data?: T) => any;
  type: 'icon-btn' | 'btn';
  hide?: (data: T) => boolean;
}
