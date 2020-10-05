import { Observable } from 'rxjs';

export interface MergeConfig {
  attribute: string;
  label: string;
  formatter?: (data: any) => Observable<string> | string;
  rowClass?: string;
  nextLine?: boolean;
  active?: boolean;
}
