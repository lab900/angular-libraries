import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormField, RepeaterFieldOptions } from '../models/FormField';
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
        const repeaterArray = this.createFormArray(data, field);
        const repeaterOptions = field.options as RepeaterFieldOptions;
        if (data && data[field.attribute]) {
          const dataRows = data[field.attribute].length;
          if (repeaterOptions?.minRows && dataRows < repeaterOptions.minRows) {
            for (let i = 0; i < repeaterOptions.minRows - dataRows; i++) {
              data[field.attribute].push({});
            }
          }
        }
        formGroup.addControl(field.attribute, repeaterArray);
      } else {
        formGroup.addControl(field.attribute, new FormControl(null, this.addValidators(field)));
      }
    });
    return formGroup;
  }

  public createFormArray(data: any, schema: FormField, formArray: FormArray = this.fb.array([])): FormArray {
    if (data && data[schema.attribute] && data[schema.attribute].length) {
      formArray.clear();
      data[schema.attribute].forEach(() => {
        formArray.push(this.createFormGroup(schema.nestedFields));
      });
    }
    return formArray;
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
