import { EditType } from '../../../models/editType';
import { FormFieldBase, FormFieldBaseOptions } from '../../../models/form-field-base';

export interface FormFieldRangeSliderOptions extends FormFieldBaseOptions {
  fromLabel?: string;
  toLabel?: string;
  enabledInputs?: boolean;
  steps?: number;
  format?: 'K-M' | 'DEFAULT';
}

export interface FormFieldRangeSlider<T extends string | number = string> extends FormFieldBase<T, FormFieldRangeSliderOptions> {
  editType: EditType.RangeSlider;
}
