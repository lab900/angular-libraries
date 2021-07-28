import { EditType } from '../../../models/editType';
import {
  FormFieldBase,
  FormFieldBaseOptions,
  ValueLabel,
} from '../../../models/form-field-base';
import { Observable } from 'rxjs';

export interface FormFieldSelectOptionsFilter {
  page?: number;
  searchQuery?: string;
}

export type FormFieldSelectOptionsFn = (
  filter?: FormFieldSelectOptionsFilter
) => ValueLabel[] | Observable<ValueLabel[]>;

export interface FormFieldSelectOptions extends FormFieldBaseOptions {
  multiple?: boolean;
  selectOptions?:
    | FormFieldSelectOptionsFn
    | ValueLabel[]
    | Observable<ValueLabel[]>;
  compareWith?: (o1: any, o2: any) => boolean;
  displayOptionFn?: (option: ValueLabel) => string;
  search?: {
    enabled: boolean;
    placeholder?: string;
    notFoundLabel?: string;
    /**
     * Clear the search when the select closes
     * @default true
     */
    clearOnClose?: boolean;
  };
  infiniteScroll?: {
    enabled: boolean;
    /**
     * The threshold distance from the bottom of the options list to call the infiniteScroll output event when scrolled.
     * The threshold value can be either in percent, or in pixels.
     * For example, use the value of 10% for the infiniteScroll output event to get called when the user has needs 10% to reach the bottom.
     */
    threshold?: string;
    /**
     * The threshold time before firing the infiniteScroll event
     */
    debounceTime?: number;
  };
}

export interface FormFieldSelect<T extends string | number = string>
  extends FormFieldBase<T, FormFieldSelectOptions> {
  editType: EditType.Select;
}
