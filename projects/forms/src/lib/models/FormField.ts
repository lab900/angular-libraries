import { EditType } from './editType';
import { AngularEditorConfig } from '@kolkov/angular-editor';

export interface FieldOptions {
  hide?: boolean;
  hint?: string;
  placeholder?: string;
  colspan?: number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;

  pattern?: RegExp;

  /**
   * User-friendly representation of the regex. For invalid input,
   * the user will receive an error message like "Please enter a valid ${regexName}."
   */
  patternTitle?: string;
}

export interface WysiwygFieldOptions extends FieldOptions {
  editorConfig?: AngularEditorConfig;
}

export interface InputFieldOptions extends FieldOptions {
  type?: 'text' | 'number' | 'email' | 'password';
}

export interface RepeaterFieldOptions extends FieldOptions {
  fixedList?: boolean;
  addLabel?: string;
  minRows?: number;
  maxRows?: number;
}

export interface SelectFieldOptions extends FieldOptions {
  multiple?: boolean;
  values?: { key: string; value: string }[];
  valuesFn?: () => Promise<{ key: any; value: string }[]>;
}

export interface FormField<
  T extends FieldOptions = WysiwygFieldOptions | InputFieldOptions | SelectFieldOptions | FieldOptions | RepeaterFieldOptions
> {
  attribute: string;
  editType: EditType;
  title?: string;
  options?: T;
  nestedFields?: FormField[];
}
