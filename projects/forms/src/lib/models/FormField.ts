import { EditType } from './editType';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { IFormComponent } from './IFormComponent';

export interface FieldOptions {
  hide?: boolean;
  hint?: string;
  placeholder?: string;
  colspan?: number;
  required?: boolean;
  readOnly?: boolean;
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

  visibleFn?: (item: IFormComponent<any>) => boolean;
}

export interface WysiwygFieldOptions extends FieldOptions {
  editorConfig?: AngularEditorConfig;
}

export interface InputFieldOptions extends FieldOptions {
  type?: 'text' | 'number' | 'email' | 'password' | 'tel';
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

export interface AutocompleteOptions extends FieldOptions {
  displayInputFn: (option: any) => string;
  displayOptionFn: (option: any) => string;
  getOptionsFn: (searchTerm: string) => any[] | Observable<any[]>;
}

export interface RadioButtonsFieldOptions extends FieldOptions {
  values: { value: any; label: string }[];
  color?: ThemePalette;
}

export interface RangeSliderFieldOptions extends FieldOptions {
  fromLabel?: string;
  toLabel?: string;
  enabledInputs?: boolean;
  steps?: number;
  format?: 'K-M' | 'DEFAULT';
}
export interface IconFieldOptions extends FieldOptions {
  icon?: Icon;
}
export interface ButtonToggleFieldOptions extends FieldOptions {
  values: { value: any; label?: string; icon?: Icon }[];
}
export interface Icon {
  name?: string;
  svgName?: string;
}
export interface FormField<
  T extends FieldOptions =
    | WysiwygFieldOptions
    | InputFieldOptions
    | SelectFieldOptions
    | FieldOptions
    | RepeaterFieldOptions
    | RadioButtonsFieldOptions
    | RangeSliderFieldOptions
    | AutocompleteOptions
    | IconFieldOptions
    | ButtonToggleFieldOptions
> {
  attribute?: string;
  editType: EditType;
  title?: string;
  options?: T;
  errorMessages?: { [key: string]: string };
  nestedFields?: FormField[];
  icon?: Icon & { position: 'left' | 'right' };
}
