import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { DateRangePickerFieldOptions, FormField, RepeaterFieldOptions, ValueLabel } from '../models/FormField';
import { EditType } from '../models/editType';
import { Injectable } from '@angular/core';
import { FormFieldUtils } from '../utils/form-field.utils';

@Injectable()
export class Lab900FormBuilderService {
  public constructor(private fb: FormBuilder) {}

  public static addValidators(field: FormField, data: any): ValidatorFn[] {
    const validators: ValidatorFn[] = field?.validators ?? [];
    if (FormFieldUtils.isRequired(FormFieldUtils.isReadOnly(field.options, data), field.options, data)) {
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

  public createFormGroup(fields: FormField[], group?: FormGroup, data?: any): FormGroup {
    let formGroup = group ? group : this.fb.group({});
    fields.forEach((field) => {
      if (field.editType === EditType.Row && field.nestedFields) {
        // nested form groups
        if (field.attribute) {
          const nestedGroup = this.createFormGroup(field.nestedFields, null, data?.[field.attribute]);
          nestedGroup.setValidators(Lab900FormBuilderService.addValidators(field, data));
          formGroup.addControl(field.attribute, nestedGroup);
          if (nestedGroup.dirty) {
            formGroup.markAsDirty();
          }
        } else {
          formGroup = this.createFormGroup(field.nestedFields, formGroup, data);
        }
      } else if (field.editType === EditType.MultiLangInput) {
        if ((field.options as any)?.languages?.length) {
          const nestedGroup = this.fb.group({}, { validators: Lab900FormBuilderService.addValidators(field, data) });
          ((field.options as any).languages as ValueLabel[]).forEach((lang) => {
            nestedGroup.addControl(lang.value, new FormControl(data?.[field.attribute]?.[lang.value]));
          });
          formGroup.addControl(field.attribute, nestedGroup);
        }
      } else if (field.editType === EditType.Repeater) {
        const repeaterArray = this.createFormArray(data, field);
        const repeaterOptions = field.options as RepeaterFieldOptions;
        if (data?.[field.attribute]) {
          const dataRows = data[field.attribute].length;
          if (repeaterOptions?.minRows && dataRows < repeaterOptions.minRows) {
            for (let i = 0; i < repeaterOptions.minRows - dataRows; i++) {
              data[field.attribute].push({});
            }
          }
        }
        repeaterArray.setValidators(Lab900FormBuilderService.addValidators(field, data));
        formGroup.addControl(field.attribute, repeaterArray);
        if (repeaterArray.dirty) {
          formGroup.markAsDirty();
        }
      } else if (field.editType === EditType.DateRange) {
        const options: DateRangePickerFieldOptions = field?.options;
        formGroup.addControl(
          field.attribute,
          this.fb.group({
            [options?.startKey || 'start']: '',
            [options?.endKey || 'end']: '',
          }),
        );
      } else {
        let controlValue: any | null = data?.[field.attribute];
        if (!controlValue && field.options && field.options.defaultValue !== null && typeof field.options.defaultValue !== 'undefined') {
          controlValue = typeof field.options.defaultValue === 'function' ? field.options.defaultValue() : field.options.defaultValue;
        }
        const formControl = new FormControl(controlValue, Lab900FormBuilderService.addValidators(field, data));
        formGroup.addControl(field.attribute, formControl);
        if (controlValue) {
          formGroup.markAsDirty();
        }
      }
    });
    return formGroup;
  }

  public createFormArray(data: any, schema: FormField, formArray: FormArray = this.fb.array([])): FormArray {
    if (data && data[schema.attribute] && data[schema.attribute].length) {
      formArray.clear();
      data[schema.attribute].forEach((nestedData) => {
        formArray.push(this.createFormGroup(schema.nestedFields, undefined, nestedData));
      });
    }
    return formArray;
  }
}
