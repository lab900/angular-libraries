import { Component, ViewChild } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { FormContainerComponent } from 'projects/forms/src/lib/components/form-container/form-container.component';
import { formFieldsExample } from './config/form-fields-example';
import { formDataExample } from './config/form-data-example';

@Component({
  selector: 'lab900-form-field-autocomplete-example',
  templateUrl: './form-container-example.component.html',
})
export class FormContainerExampleComponent {
  public formFields: Form = formFieldsExample;
  public formData = formDataExample;

  @ViewChild('lab900FormContainer') private formContainer: FormContainerComponent<any>;

  public submitForm(): void {
    console.log(this.formContainer.value);
  }
}
