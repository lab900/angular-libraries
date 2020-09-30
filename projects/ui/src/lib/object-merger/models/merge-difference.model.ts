import { Observable } from 'rxjs';

export interface MergeDifference<T = any> {
  primary: T;
  secondary: T;
  label: string;
  active: boolean;
  formatter?: (data: T) => string | Observable<string>;
  rowClass?: string;
}
