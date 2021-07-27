import { EditType } from '../../../models/editType';
import {
  FormFieldBase,
  FormFieldBaseOptions,
  Icon,
} from '../../../models/form-field-base';
import { IConfig } from 'ngx-mask';

export interface FieldMask extends Partial<IConfig> {
  mask: string;
}

export interface FormFieldInputOptions extends FormFieldBaseOptions {
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
  autofocus?: boolean;
  suffix?: string;
  prefix?: string;
  align?: 'left' | 'right';
  fieldMask?: FieldMask;
}

export interface FormFieldInput<T extends string | number = string>
  extends FormFieldBase<T, FormFieldInputOptions> {
  editType: EditType.Input;
  icon?: Icon & { position?: 'left' | 'right' };
}
