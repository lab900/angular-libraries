import { EditType } from '../../../models/editType';
import { FormFieldBase, FormFieldBaseOptions } from '../../../models/form-field-base';

export interface FormFieldFileOptions extends FormFieldBaseOptions {
  multiple?: boolean;
  accept?: string;
}

export interface FormFieldFile<T extends string | number = string> extends FormFieldBase<T, FormFieldFileOptions> {
  editType: EditType.File;
}
