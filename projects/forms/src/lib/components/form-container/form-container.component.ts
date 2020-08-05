import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup as NgFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { defaultValue } from '../../models/editType';
import { Form, isFormField } from '../../models/Form';
import { FormField, FieldOptions } from '../../models/FormField';
import { FormGroup } from '../../models/FormGroup';

@Component({
  selector: 'lab900-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent<T> implements OnInit {
  @Input() schema: Form;
  @Input() data: T;

  form: NgFormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(
      this.schema.fields.reduce((formGroupObject, field) => {
        if (isFormField(field)) {
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

          formGroupObject[field.attribute] = new FormControl(defaultValue(field.editType), validators);
        }
        return formGroupObject;
      }, {}),
    );

    if (this.data) {
      this.form.patchValue(this.data);
    }
  }

  isFormField(formField: FormGroup | FormField): boolean {
    return isFormField(formField);
  }

  get valid() {
    return this.form.valid;
  }

  get value(): T {
    return this.form.value as T;
  }
}
