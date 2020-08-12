
import { Component } from '@angular/core';
import { Form, EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-radio-buttons-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldRadioButtonsExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'somePropName',
        title: 'Select yes or no',
        editType: EditType.RadioButtons,
        options: {
          values: [
            {
              value: true,
              label: 'yes',
            },
            {
              value: false,
              label: 'no',
            },
          ],
        },
      },
    ],
  };
}
