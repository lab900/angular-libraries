import { Observable } from 'rxjs';
import { Type } from '@angular/core';
import { CustomComponent } from '../abstracts/custom-component.abstract';

export interface MergeConfig<T> {
  attribute: string;
  label?: string;
  formatter?: (data: any) => Observable<string> | string;
  rowClass?: string;
  nextLine?: boolean;
  active?: boolean;
  component?: Type<CustomComponent<T>>;
}
