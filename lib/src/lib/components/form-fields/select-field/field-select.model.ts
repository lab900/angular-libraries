import { EditType } from '../../../models/editType';
import { FormFieldBase, FormFieldBaseOptions, ValueLabel } from '../../../models/form-field-base';
import { Observable } from 'rxjs';

export interface FormFieldSelectOptionsFilter {
  page?: number;
  searchQuery?: string;
}

export type FormFieldSelectOptionsFn = (filter?: FormFieldSelectOptionsFilter) => ValueLabel[] | Observable<ValueLabel[]>;

export interface FormFieldSelectOptions extends FormFieldBaseOptions {
  multiple?: boolean;
  selectOptions?: FormFieldSelectOptionsFn | ValueLabel[] | Observable<ValueLabel[]>;
  compareWith?: (o1: any, o2: any) => boolean;
  displayOptionFn?: (option: ValueLabel) => string;
  infiniteScroll?: {
    enabled: boolean;
    /**
     * default '15%'
     */
    threshold?: string;
    /**
     * default 150
     */
    debounceTime?: number;
  };
}

export interface FormFieldSelect<T extends string | number = string> extends FormFieldBase<T, FormFieldSelectOptions> {
  editType: EditType.Select;
}
