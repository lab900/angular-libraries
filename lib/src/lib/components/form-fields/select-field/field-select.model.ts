import { EditType } from '../../../models/editType';
import { FormFieldBase, FormFieldBaseOptions, ValueLabel } from '../../../models/form-field-base';
import { Observable } from 'rxjs';

export interface FormFieldSelectOptions extends FormFieldBaseOptions {
  multiple?: boolean;
  selectOptions?: (() => ValueLabel[] | Observable<ValueLabel[]>) | ValueLabel[] | Observable<ValueLabel[]>;
  conditionalSelectOptions?: (dependOn: string, value: any) => ValueLabel[] | Observable<ValueLabel[]>;
  compareWith?: (o1: any, o2: any) => boolean;
  displayOptionFn?: (option: ValueLabel) => string;
}

export interface FormFieldSelect<T extends string | number = string> extends FormFieldBase<T, FormFieldSelectOptions> {
  editType: EditType.Select;
}
