import { EditType } from '../../../models/editType';
import { FormFieldBase } from '../../../models/form-field-base';
import { ThemePalette } from '@angular/material/core';
import { FormFieldInputOptions } from '../input-field/input-field.model';

export interface FormFieldMultiLangOptions extends FormFieldInputOptions {
  buttonColor?: ThemePalette;
  translateLabel?: string;
  stopTranslateLabel?: string;
  useTextAreaField?: boolean;
}

export interface FormFieldMultiLang<T extends string | number = string>
  extends FormFieldBase<T, FormFieldMultiLangOptions> {
  editType: EditType.MultiLangInput;
}
