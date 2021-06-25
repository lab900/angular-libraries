import { EditType } from '../../../models/editType';
import { FormFieldBase, FormFieldBaseOptions } from '../../../models/form-field-base';

export interface FormFieldDatePickerOptions extends FormFieldBaseOptions {
  startView?: 'month' | 'year' | 'multi-year';
  maxDate?: Date;
  minDate?: Date;
}

export interface FormFieldDatePicker<T extends string | number = string> extends FormFieldBase<T, FormFieldDatePickerOptions> {
  editType: EditType.Date;
}
