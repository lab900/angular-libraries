import { FormFieldBase, FormFieldBaseOptions, Icon } from '../../../models/form-field-base';
import { ThemePalette } from '@angular/material/core';
import { EditType } from '../../../models/editType';

export interface FormFieldButtonToggleOptions extends FormFieldBaseOptions {
  buttonOptions: { value: any; label?: string; icon?: Icon & { position?: 'left' | 'right' }; buttonClass?: string }[];
  color?: ThemePalette;
}

export interface FormFieldButtonToggle<T extends string | number = string> extends FormFieldBase<T, FormFieldButtonToggleOptions> {
  editType: EditType.ButtonToggle;
}
