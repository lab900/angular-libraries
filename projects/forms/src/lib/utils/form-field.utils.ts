import { FieldOptions } from '../models/FormField';
import { FormGroup } from '@angular/forms';
import { FormComponent } from '../models/IFormComponent';

export class FormFieldUtils {
  public static isReadOnly(fieldOptions: FieldOptions, formGroup: FormGroup, formComponent?: FormComponent): boolean {
    let isReadOnly: boolean;
    if (formComponent && formComponent.readonly === true) {
      isReadOnly = formComponent.readonly;
    } else if (typeof fieldOptions?.readonly === 'function') {
      isReadOnly = fieldOptions?.readonly(formGroup?.value);
    } else {
      isReadOnly = fieldOptions?.readonly ?? false;
    }
    return isReadOnly;
  }
  public static isRequired(isReadOnly: boolean, fieldOptions: FieldOptions): boolean {
    return (!isReadOnly && fieldOptions?.required) ?? false;
  }
}
