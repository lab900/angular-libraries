import { EditType } from '../../../models/editType';
import {
  FormFieldBase,
  FormFieldBaseOptions,
} from '../../../models/form-field-base';
import { ThemePalette } from '@angular/material/core';

export interface FormFieldCheckboxOptions extends FormFieldBaseOptions {
  disabledIndeterminate?: boolean;
  color?: ThemePalette;
}

export interface CheckboxFieldModel<T extends string | number = string>
  extends FormFieldBase<T, FormFieldCheckboxOptions> {
  editType: EditType.Checkbox;
}
