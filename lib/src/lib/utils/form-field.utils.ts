import { FormGroup, Validators } from '@angular/forms';
import { FormFieldBaseOptions } from '../models/form-field-base';
import { Lab900FormField } from '../models/lab900-form-field.type';

export class FormFieldUtils {
  public static isReadOnly(fieldOptions: FormFieldBaseOptions, data: any, readonly?: boolean): boolean {
    let isReadOnly: boolean;
    if (readonly === true) {
      isReadOnly = readonly;
    } else if (typeof fieldOptions?.readonly === 'function') {
      isReadOnly = fieldOptions?.readonly(data);
    } else {
      isReadOnly = fieldOptions?.readonly ?? false;
    }
    return isReadOnly;
  }

  public static isRequired(isReadOnly: boolean, field: Lab900FormField<any>, data: any): boolean {
    const { options, validators = [] } = field;
    if (isReadOnly) {
      return false;
    }
    if (validators?.length && validators.includes(Validators.required)) {
      return true;
    } else if (typeof options?.required === 'function') {
      return options.required(data) ?? false;
    } else {
      return options?.required ?? false;
    }
  }

  public static isHidden(fieldOptions: FormFieldBaseOptions, group: FormGroup): boolean {
    if (typeof fieldOptions?.hide === 'function') {
      return fieldOptions?.hide(group.value);
    } else {
      return fieldOptions?.hide ?? false;
    }
  }
}
