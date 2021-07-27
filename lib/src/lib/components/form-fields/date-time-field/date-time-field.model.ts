import { EditType } from '../../../models/editType';
import { FormFieldBase } from '../../../models/form-field-base';
import { FormFieldDatePickerOptions } from '../date-field/date-field.model';

export interface FormFieldDateTimePickerOptions
  extends FormFieldDatePickerOptions {
  showSeconds?: boolean;
  defaultTime?: [number, number, number];
  stepMinute?: number;
}

export interface FormFieldDateTimePicker<T extends string | number = string>
  extends FormFieldBase<T, FormFieldDateTimePickerOptions> {
  editType: EditType.DateTime;
}
