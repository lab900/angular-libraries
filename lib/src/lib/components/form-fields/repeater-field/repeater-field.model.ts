import { EditType } from '../../../models/editType';
import {
  FormFieldBase,
  FormFieldBaseOptions,
} from '../../../models/form-field-base';
import { ThemePalette } from '@angular/material/core';

export interface FormFieldRepeaterOptions extends FormFieldBaseOptions {
  fixedList?: boolean;
  removeAll?: boolean;
  addLabel?: string;
  minRows?: number;
  maxRows?: number;
  buttonColor?: ThemePalette;
}

export interface FormFieldRepeater<T extends string | number = string>
  extends FormFieldBase<T, FormFieldRepeaterOptions> {
  editType: EditType.Repeater;
}
