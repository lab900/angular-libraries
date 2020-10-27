import { Component, ViewChild } from '@angular/core';
import { Form, FormContainerComponent } from '@lab900/forms';
import { formFieldsExample } from './config/form-fields-example';
import { formDataExample } from './config/form-data-example';

@Component({
  selector: 'lab900-form-container-readonly-example',
  template: `<lab900-form-container #lab900FormContainer [schema]="formFields" [data]="formData"></lab900-form-container>`,
})
export class FormContainerReadonlyExampleComponent {
  public formFields: Form = { ...formFieldsExample, readonly: true };
  public formData = formDataExample;

  @ViewChild('lab900FormContainer')
  private formContainer: FormContainerComponent<any>;
}
