import { Component, ViewChild } from '@angular/core';
import { Lab900FormConfig, Lab900Form } from '@lab900/forms';
import { formConditionalsExample } from './config/form-conditionals-example';
import { formConditionalsData } from './config/form-conditionals-data';

@Component({
  selector: 'lab900-form-container-example',
  template: `
    <lab900-form #lab900FormContainer [schema]="formFields" [data]="formData"></lab900-form>
    <button mat-stroked-button (click)="submitForm()">Submit Form</button>
  `,
})
export class FormConditionalsExampleComponent {
  public formFields: Lab900FormConfig = formConditionalsExample;
  public formData = formConditionalsData;

  @ViewChild('lab900FormContainer')
  private formContainer: Lab900Form<any>;

  public submitForm(): void {
    if (this.formContainer.valid) {
      console.log(this.formContainer.value);
    } else {
      this.formContainer.form.markAllAsTouched();
    }
  }
}
