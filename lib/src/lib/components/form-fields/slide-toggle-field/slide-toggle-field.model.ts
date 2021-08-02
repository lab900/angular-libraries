import { FormFieldBase, FormFieldBaseOptions, Icon } from '../../../models/form-field-base';
import { ThemePalette } from '@angular/material/core';
import { EditType } from '../../../models/editType';
import { MatSlideToggle } from '@angular/material/slide-toggle';

export interface FormFieldSlideToggleOptions extends FormFieldBaseOptions {
  label?: string;
  labelPosition?: MatSlideToggle['labelPosition'];
  color?: ThemePalette;
}

export interface FormFieldSlideToggle<T extends string | number = string> extends FormFieldBase<T, FormFieldSlideToggleOptions> {
  editType: EditType.SlideToggle;
}
