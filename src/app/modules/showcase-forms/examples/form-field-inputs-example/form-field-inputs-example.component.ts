import { Component } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';

@Component({
  selector: 'lab900-form-field-inputs-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldInputsExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'textInput',
        title: 'Text Input',
        editType: EditType.Input,
        options: { hide: true },
      },
      {
        attribute: 'emailInput',
        title: 'Email Input',
        editType: EditType.Input,
        options: {
          type: 'email',
        },
      },
      {
        attribute: 'emailInput',
        title: 'Number Input',
        editType: EditType.Input,
        options: {
          type: 'number',
        },
      },
      {
        attribute: 'emailInput',
        title: 'Password Input',
        editType: EditType.Input,
        options: {
          type: 'password',
        },
      },
    ],
  };
}
