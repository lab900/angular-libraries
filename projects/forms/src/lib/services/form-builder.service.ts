import { ValidatorFn, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormField } from '../models/FormField';
import { EditType } from '../models/editType';
import { Injectable } from '@angular/core';

@Injectable()
export class Lab900FormBuilderService {
  public constructor(private fb: FormBuilder) {}

  public createFormGroup(fields: FormField[], group?: FormGroup, data?: any): FormGroup {
    let formGroup = group ? group : this.fb.group({});
    fields.forEach((field) => {
      if (field.editType === EditType.Row && field.nestedFields) {
        formGroup = this.createFormGroup(field.nestedFields, formGroup, data && data[field.attribute]);
      } else if (field.editType === EditType.Repeater) {
        const repeaterArray = this.fb.array([]);
        if (data && data[field.attribute] && data[field.attribute].length) {
          data[field.attribute].forEach(() => {
            repeaterArray.push(this.createFormGroup(field.nestedFields));
          });
        }
        formGroup.addControl(field.attribute, repeaterArray);
      } else {
        formGroup.addControl(field.attribute, new FormControl(null, this.addValidators(field)));
      }
    });
    return formGroup;
  }

  public addValidators(field: FormField): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (field.options?.required) {
      validators.push(Validators.required);
    }
    if (field.options?.minLength) {
      validators.push(Validators.minLength(field.options.minLength));
    }
    if (field.options?.maxLength) {
      validators.push(Validators.maxLength(field.options.maxLength));
    }
    if (field.options?.min) {
      validators.push(Validators.min(field.options.min));
    }
    if (field.options?.max) {
      validators.push(Validators.max(field.options.max));
    }
    if (field.options?.pattern) {
      validators.push(Validators.pattern(field.options.pattern));
    }
    return validators;
  }
}
