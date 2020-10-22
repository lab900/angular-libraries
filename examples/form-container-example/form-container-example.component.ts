import { Component, ViewChild } from '@angular/core';
import { Form, FormContainerComponent } from '@lab900/forms';
import { formFieldsExample } from './config/form-fields-example';
import { formDataExample } from './config/form-data-example';

@Component({
  selector: 'lab900-form-container-example',
  template: `
    <lab900-form-container #lab900FormContainer [schema]="formFields" [data]="formData"></lab900-form-container>
    <button mat-stroked-button (click)="submitForm()">Submit Form</button>
  `,
})
export class FormContainerExampleComponent {
  public formFields: Form = formFieldsExample;
  public formData = formDataExample;

  @ViewChild('lab900FormContainer')
  private formContainer: FormContainerComponent<any>;

  public submitForm(): void {
    if (this.formContainer.valid) {
      console.log(this.formContainer.value);
    } else {
      this.formContainer.form.markAllAsTouched();
    }
  }
}
