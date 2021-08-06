import { EditType } from '../../../models/editType';
import {
  FormFieldBase,
  FormFieldBaseOptions,
} from '../../../models/form-field-base';

export interface FormFieldTextareaOptions extends FormFieldBaseOptions {
  showLengthIndicator?: boolean;
}

export interface FormFieldTextarea<T extends string | number = string>
  extends FormFieldBase<T, FormFieldTextareaOptions> {
  editType: EditType.TextArea;
}
