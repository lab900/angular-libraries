import { EditType } from './editType';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ThemePalette } from '@angular/material/core';
import { Observable } from 'rxjs';
import { IFormComponent } from './IFormComponent';
import { IFieldConditions } from './IFieldConditions';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Form } from './Form';
import { Lab900File } from './Lab900File';
import { IConfig } from 'ngx-mask';

export interface ValueLabel<T = any> {
  value: T;
  label: string;
}

export interface FieldMask extends Partial<IConfig> {
  mask: string;
}

export interface FieldOptions {
  hide?: boolean | ((data?: any) => boolean);
  hint?: { value?: string; hideHintOnValidValue?: boolean; valueTranslateData?: object };
  placeholder?: string;
  colspan?: number; // 12 column grid = value from 1 to 12.
  mobileCols?: boolean; // keep colspan on mobile (only for form rows)
  required?: boolean | ((data?: any) => boolean);
  readonly?: boolean | ((data?: any) => boolean);
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  defaultValue?: any;
  pattern?: RegExp;
  fieldMask?: FieldMask;
  readonlyLabel?: string;
  readonlyDisplay?: (data?: any) => any;
  color?: ThemePalette;
  visibleFn?: (item: IFormComponent<any>) => boolean;
  onChangeFn?: (value: any) => void;
}

export interface WysiwygFieldOptions extends FieldOptions {
  editorConfig?: AngularEditorConfig;
}

export interface InputFieldOptions extends FieldOptions {
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
  autofocus?: boolean;
}

export interface MultiLangInputFieldOptions extends InputFieldOptions {
  buttonColor?: ThemePalette;
  translateLabel?: string;
  stopTranslateLabel?: string;
  useTextAreaField?: boolean;
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
  selectOptions?: (() => ValueLabel[] | Observable<ValueLabel[]>) | ValueLabel[] | Observable<ValueLabel[]>;
  conditionalSelectOptions?: (dependOn: string, value: any) => ValueLabel[] | Observable<ValueLabel[]>;
  compareWith?: (o1: any, o2: any) => boolean;
  displayOptionFn?: (option: ValueLabel) => string;
}

export interface AutocompleteOptions extends FieldOptions {
  displayInputFn: (option: any) => string; // the value of the ValueLabel will be passed here
  displayOptionFn: (option: ValueLabel) => string;
  autocompleteOptions?: (searchTerm: string, currentControl: AbstractControl) => ValueLabel[] | Observable<ValueLabel[]>;
  debounceTime?: number;
}

export interface RadioButtonsFieldOptions extends FieldOptions {
  radioOptions: ValueLabel[];
}

export interface DatepickerFieldOptions extends FieldOptions {
  startView?: 'month' | 'year' | 'multi-year';
  maxDate?: Date;
  minDate?: Date;
  showSeconds?: boolean;
  defaultTime?: [number, number, number];
  stepMinute?: number;
}

export interface DateRangePickerFieldOptions extends FieldOptions {
  maxDate?: Date;
  minDate?: Date;
  startLabel?: string;
  endLabel?: string;
  startKey?: string;
  endKey?: string;
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
  buttonOptions: { value: any; label?: string; icon?: Icon & { position?: 'left' | 'right' }; buttonClass?: string }[];
}

export interface FileFieldOptions extends FieldOptions {
  multiple?: boolean;
  accept?: string;
}

export interface FilePreviewFieldOptions extends FileFieldOptions {
  fileUploadButtonText?: string;
  canEditFileMetaData?: boolean;
  fileMetaDataConfig?: Form;
  httpCallback?: (image: Lab900File) => Observable<Blob>;
  showOverlay: boolean | ((data?: any) => boolean);
  overlay?: {
    backgroundColor: string;
    textColor: string;
    text: string;
  };
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
    | DateRangePickerFieldOptions
    | FileFieldOptions
    | FilePreviewFieldOptions
    | MultiLangInputFieldOptions,
> {
  attribute?: string;
  editType: EditType;
  title?: string;
  options?: T;
  validators?: ValidatorFn[];
  errorMessages?: { [key: string]: string };
  nestedFields?: FormField[];
  icon?: Icon & { position?: 'left' | 'right' };
  conditions?: IFieldConditions[];
}
