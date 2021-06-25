import { EditType } from '../../../models/editType';
import { FormFieldBase, FormFieldBaseOptions } from '../../../models/form-field-base';
import { AngularEditorConfig } from '@kolkov/angular-editor';

export interface FormFieldWysiwgOptions extends FormFieldBaseOptions {
  editorConfig?: AngularEditorConfig;
}

export interface WysiwgFieldModel<T extends string | number = string> extends FormFieldBase<T, FormFieldWysiwgOptions> {
  editType: EditType.Wysiwyg;
}
