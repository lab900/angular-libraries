import { EditType } from '../../../models/editType';
import { FormFieldBase, FormFieldBaseOptions, ValueLabel } from '../../../models/form-field-base';
import { ThemePalette } from '@angular/material/core';

export interface FormFieldRadioButtonsOptions extends FormFieldBaseOptions {
  radioOptions: ValueLabel[];
  color?: ThemePalette;
}

export interface FormFieldRadioButtons<T extends string | number = string> extends FormFieldBase<T, FormFieldRadioButtonsOptions> {
  editType: EditType.RadioButtons;
}
