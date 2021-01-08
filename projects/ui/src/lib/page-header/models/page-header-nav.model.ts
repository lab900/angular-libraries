import { Observable } from 'rxjs';

type propFunction<T> = (data: T) => string;

export interface PageHeaderNavItem<T = any> {
  label: propFunction<T> | string;
  route?: propFunction<T> | string;
  queryParams?: Observable<{ [key: string]: any }> | { [key: string]: any };
}
