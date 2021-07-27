import { EditType } from '../../../models/editType';
import { FormFieldBase } from '../../../models/form-field-base';

export interface FormFieldTextarea<T extends string | number = string>
  extends FormFieldBase<T> {
  editType: EditType.TextArea;
}
