import { FieldOptions, FormField } from '../models/FormField';
import { FormComponent } from '../models/IFormComponent';
import { FormGroup, Validators } from '@angular/forms';

export class FormFieldUtils {
  public static isReadOnly(fieldOptions: FieldOptions, data: any, formComponent?: FormComponent): boolean {
    let isReadOnly: boolean;
    if (formComponent && formComponent.readonly === true) {
      isReadOnly = formComponent.readonly;
    } else if (typeof fieldOptions?.readonly === 'function') {
      isReadOnly = fieldOptions?.readonly(data);
    } else {
      isReadOnly = fieldOptions?.readonly ?? false;
    }
    return isReadOnly;
  }

  public static isRequired(isReadOnly: boolean, field: FormField, data: any): boolean {
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

  public static isHidden(fieldOptions: FieldOptions, group: FormGroup): boolean {
    if (typeof fieldOptions?.hide === 'function') {
      return fieldOptions?.hide(group.value);
    } else {
      return fieldOptions?.hide ?? false;
    }
  }
}
