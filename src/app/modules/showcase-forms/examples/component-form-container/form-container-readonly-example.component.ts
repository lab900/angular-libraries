import { Component, ViewChild } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { FormContainerComponent } from 'projects/forms/src/lib/components/form-container/form-container.component';
import { formFieldsExample } from './config/form-fields-example';
import { formDataExample } from './config/form-data-example';

@Component({
  selector: 'lab900-form-container-readonly-example',
  template: `<lab900-form-container #lab900FormContainer [schema]="formFields" [data]="formData"></lab900-form-container>
    <button mat-stroked-button (click)="submitForm()" [disabled]="!lab900FormContainer.valid">Submit Form</button>`,
})
export class FormContainerReadonlyExampleComponent {
  public formFields: Form = { ...formFieldsExample, readonly: true };
  public formData = formDataExample;

  @ViewChild('lab900FormContainer') private formContainer: FormContainerComponent<any>;

  public submitForm(): void {
    console.log(this.formContainer.value);
  }
}
