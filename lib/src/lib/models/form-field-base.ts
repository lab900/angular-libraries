import { ValidatorFn } from '@angular/forms';
import { IFieldConditions } from './IFieldConditions';
import { Lab900FormField } from './lab900-form-field.type';

export interface ValueLabel<T = any> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface Icon {
  name?: string;
  svgName?: string;
}

export interface FormFieldBase<
  T extends string | number = string,
  O extends FormFieldBaseOptions = FormFieldBaseOptions
> {
  attribute?: T;
  title?: string;
  validators?: ValidatorFn[];
  errorMessages?: { [key: string]: string };
  conditions?: IFieldConditions[];
  options?: O;
  nestedFields?: Lab900FormField[];
}

export interface FormFieldBaseOptions {
  hide?: boolean | ((data?: any) => boolean);
  hint?: {
    value?: string;
    hideHintOnValidValue?: boolean;
    valueTranslateData?: object;
  };
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
  readonlyLabel?: string;
  readonlyDisplay?: (data?: any) => any;
  visibleFn?: (item: any) => boolean;
  onChangeFn?: (value: any) => void;
  infoTooltip?: { text: string; icon?: string };
}
