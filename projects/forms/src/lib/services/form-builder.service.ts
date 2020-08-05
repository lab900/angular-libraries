import { ValidatorFn, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormField } from '../models/FormField';
import { EditType, defaultValue } from '../models/editType';
import { Injectable } from '@angular/core';

@Injectable()
export class Lab900FormBuilderService {
  public constructor(private fb: FormBuilder) {}

  public createFormGroup(fields: FormField[], group?: FormGroup): FormGroup {
    let formGroup = group ? group : this.fb.group({});
    fields.forEach((field) => {
      if (field.editType === EditType.Row && field.nestedFields) {
        formGroup = this.createFormGroup(field.nestedFields, formGroup);
      } else if (field.editType === EditType.Repeater) {
        formGroup.addControl(field.attribute, this.fb.array([]));
      } else {
        formGroup.addControl(field.attribute, new FormControl(defaultValue(field.editType), this.addValidators(field)));
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