import { EditType } from '../../models/editType';
import {
  FormFieldBase,
  FormFieldBaseOptions,
} from '../../models/form-field-base';

export interface FormRowOptions extends FormFieldBaseOptions {
  customClass?: string;
  customTitleClass?: string;
}

export interface FormRow<T extends number | string = string>
  extends FormFieldBase<T, FormRowOptions> {
  editType: EditType.Row;
}
