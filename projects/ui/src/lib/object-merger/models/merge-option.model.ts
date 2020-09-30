import { Observable } from 'rxjs';

export interface MergeOption<T = any> {
  attribute: string;
  label: string;
  formatter?: (data: T) => string | Observable<string>;
  rowClass?: string;
}
