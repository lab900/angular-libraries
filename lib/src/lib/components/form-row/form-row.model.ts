import { EditType } from '../../models/editType';
import { FormFieldBase } from '../../models/form-field-base';

export interface FormRow<T extends number | string = string>
  extends FormFieldBase<T> {
  editType: EditType.Row;
}
