import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { FormContainerComponent } from 'projects/forms/src/lib/components/form-container/form-container.component';
import { formFieldsExample } from './config/form-fields-example';
import { formDataExample } from './config/form-data-example';

@Component({
  selector: 'lab900-form-container-readonly-example',
  template: `<lab900-form-container #lab900FormContainer [schema]="formFields" [data]="formData"></lab900-form-container>`,
})
export class FormContainerReadonlyExampleComponent implements AfterViewInit {
  public formFields: Form = { ...formFieldsExample, readonly: true };
  public formData;

  @ViewChild('lab900FormContainer') private formContainer: FormContainerComponent<any>;

  public ngAfterViewInit() {
    setTimeout(() => (this.formData = formDataExample), 100);
  }
}
