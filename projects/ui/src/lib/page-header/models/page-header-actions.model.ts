type propFunction<T> = (data: T) => string;

export interface PageHeaderAction<T = any> {
  label: propFunction<T> | string;
  action: (data?: T) => any;
  type: 'main' | 'sub';
  disabled?: boolean;
}
