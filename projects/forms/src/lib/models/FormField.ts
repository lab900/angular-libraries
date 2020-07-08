import { EditType } from './editType';
import { AngularEditorConfig } from '@kolkov/angular-editor';

export interface FieldOptions {
  hide?: boolean;
  hint?: string;
  colspan?: number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;

  pattern?: RegExp;

  /**
   * Error message/translation key shown when pattern is invalid.
   */
  patternError?: string;
}

export interface WysiwygFieldOptions extends FieldOptions {
  editorConfig?: AngularEditorConfig;
}
export interface SelectFieldOptions extends FieldOptions {
  multiple?: boolean;
  values?: { key: string; value: string }[];
  valuesFn?: () => Promise<{ key: any; value: string }[]>;
}

export interface FormField {
  title: string;
  attribute: string;
  editType: EditType;
  options?: SelectFieldOptions | WysiwygFieldOptions | FieldOptions;
}
