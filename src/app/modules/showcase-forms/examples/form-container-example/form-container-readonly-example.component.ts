import { Component, ViewChild } from '@angular/core';
import { Form, FormContainerComponent } from '@lab900/forms';
import { formFieldsExample } from './config/form-fields-example';
import { formDataExample } from './config/form-data-example';

@Component({
  selector: 'lab900-form-container-readonly-example',
  // template: `<lab900-form-container #lab900FormContainer [schema]="formFields" [data]="formData"></lab900-form-container>`,
  template: ``,
})
export class FormContainerReadonlyExampleComponent {
  public formFields: Form = { ...formFieldsExample, readonly: true };
  public formData;

  @ViewChild('lab900FormContainer')
  private formContainer: FormContainerComponent<any>;

  public constructor() {
    setTimeout(() => (this.formData = formDataExample), 500);
    // setTimeout(() => (this.formData = { ...formDataExample, country: 'EN' }), 3000);
  }
}
