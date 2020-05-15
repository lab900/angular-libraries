import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup as NgFormGroup, Validators } from '@angular/forms';
import { defaultValue } from '../../models/editType';
import { Form, isFormField } from '../../models/Form';
import { FormField } from '../../models/FormField';
import { FormGroup } from '../../models/FormGroup';

@Component({
  selector: 'lib-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css'],
})
export class DialogFormComponent implements OnInit {
  @Input() formSchema: Form;

  form: NgFormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(
      this.formSchema.fields.reduce((formGroupObject, field) => {
        if (isFormField(field)) {
          formGroupObject[field.attribute] = [defaultValue(field.editType), [Validators.required]];
        }
        return formGroupObject;
      }, {}),
    );
    this.form = this.fb.group(
      this.formSchema.fields.reduce((formGroupObject, field) => {
        if (isFormField(field)) {
          formGroupObject[field.attribute] = [defaultValue(field.editType)];
        }
        return formGroupObject;
      }, {}),
    );
  }

  isFormField(formField: FormGroup | FormField): boolean {
    return isFormField(formField);
  }

  get success() {
    return false;
  }

  get valid() {
    return this.form.valid;
  }

  submitHandler() {}
}
