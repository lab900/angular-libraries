import { FieldOptions } from '../models/FormField';
import { FormComponent } from '../models/IFormComponent';

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

  public static isRequired(isReadOnly: boolean, fieldOptions: FieldOptions, data: any): boolean {
    if (typeof fieldOptions?.required === 'function') {
      return (!isReadOnly && fieldOptions?.required(data)) ?? false;
    } else {
      return (!isReadOnly && fieldOptions?.required) ?? false;
    }
  }
}
