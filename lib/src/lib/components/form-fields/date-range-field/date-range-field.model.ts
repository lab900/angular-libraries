import { EditType } from '../../../models/editType';
import { FormFieldBase, FormFieldBaseOptions } from '../../../models/form-field-base';

export interface FormFieldDateRangeOptions extends FormFieldBaseOptions {
  maxDate?: Date;
  minDate?: Date;
  startLabel?: string;
  endLabel?: string;
  startKey?: string;
  endKey?: string;
}

export interface FormFieldDateRange<T extends string | number = string> extends FormFieldBase<T, FormFieldDateRangeOptions> {
  editType: EditType.DateRange;
}
