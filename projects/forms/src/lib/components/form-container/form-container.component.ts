import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup as NgFormGroup, Validators } from '@angular/forms';
import { defaultValue } from '../../models/editType';
import { Form, isFormField } from '../../models/Form';
import { FormField } from '../../models/FormField';
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
          formGroupObject[field.attribute] = new FormControl(defaultValue(field.editType), [
            field.options?.required ? Validators.required : () => null,
            field.options?.minLength ? Validators.minLength(field.options.minLength) : () => null,
            field.options?.maxLength ? Validators.maxLength(field.options.maxLength) : () => null,
            field.options?.min ? Validators.min(field.options.min) : () => null,
            field.options?.max ? Validators.max(field.options.max) : () => null,
            field.options?.pattern ? Validators.pattern(field.options.pattern) : () => null,
          ]);
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
