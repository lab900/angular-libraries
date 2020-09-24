import { EditType } from './editType';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { IFormComponent } from './IFormComponent';

export interface FieldOptions {
  hide?: boolean;
  hint?: { value: string; hideHintOnValidValue?: boolean };
  placeholder?: string;
  colspan?: number;
  required?: boolean;
  readonly?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  defaultValue?: any;
  pattern?: RegExp;
  mask?: string;
  readonlyLabel?: string;
  readonlyDisplay?: (data?: any) => any;
  color?: ThemePalette;

  /**
   * Translation key for the error to be shown when the pattern validation failed.
   */
  patternError?: string;

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
  removeAll?: boolean;
  addLabel?: string;
  minRows?: number;
  maxRows?: number;
  buttonColor?: ThemePalette;
}

export interface SelectFieldOptions extends FieldOptions {
  multiple?: boolean;
  values?: { value: any; label: string }[];
  valuesFn?: () => Observable<{ value: any; label: string }[]>;
  compareWith?: (o1: any, o2: any) => boolean;
}

export interface AutocompleteOptions extends FieldOptions {
  displayInputFn: (option: any) => string;
  displayOptionFn: (option: any) => string;
  getOptionsFn: (searchTerm: string) => any[] | Observable<any[]>;
}

export interface RadioButtonsFieldOptions extends FieldOptions {
  values: { value: any; label: string }[];
}

export interface DatepickerFieldOptions extends FieldOptions {
  startView?: 'month' | 'year' | 'multi-year';
  maxDate?: Date;
  minDate?: Date;
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
    | DatepickerFieldOptions
> {
  attribute?: string;
  editType: EditType;
  title?: string;
  options?: T;
  errorMessages?: { [key: string]: string };
  nestedFields?: FormField[];
  icon?: Icon & { position: 'left' | 'right' };
}
