import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { defaultValue, EditType } from '../../models/editType';
import { Form } from '../../models/Form';
import { FormField } from '../../models/FormField';

@Component({
  selector: 'lab900-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent<T> implements OnInit {
  @Input()
  public schema: Form;

  @Input()
  public data: T;

  public form: FormGroup;

  public get valid() {
    return this.form.valid;
  }

  public get value(): T {
    return this.form.value as T;
  }

  public constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form = this.createFormGroup(this.schema.fields);
    console.log(this.form);
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  private createFormGroup(fields: FormField[], group?: FormGroup): FormGroup {
    let formGroup = group ? group : this.fb.group({});
    fields.forEach((field) => {
      if (field.editType === EditType.Row && field.nestedFields) {
        formGroup = this.createFormGroup(field.nestedFields, formGroup);
      } else {
        formGroup.addControl(field.attribute, new FormControl(defaultValue(field.editType), this.addValidators(field)));
      }
    });
    return formGroup;
  }

  private addValidators(field: FormField): ValidatorFn[] {
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
;  }
}
