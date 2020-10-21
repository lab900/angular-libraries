import { Observable } from 'rxjs';
import { Type } from '@angular/core';
import { CustomComponent } from '../abstracts/custom-component.abstract';

export interface MergeConfigBase {
  attribute?: string;
  label?: string;
  formatter?: (data: any) => Observable<string> | string;
}

export interface MergeConfig<T> extends MergeConfigBase {
  rowClass?: string;
  nextLine?: boolean;
  active?: boolean;
  component?: Type<CustomComponent<T>>;
  nestedObject?: MergeConfigBase[];
}
