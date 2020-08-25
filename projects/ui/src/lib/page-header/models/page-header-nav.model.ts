type propFunction<T> = (data: T) => string;

export interface PageHeaderNavItem<T = any> {
  label: propFunction<T> | string;
  route: propFunction<T> | string;
}
