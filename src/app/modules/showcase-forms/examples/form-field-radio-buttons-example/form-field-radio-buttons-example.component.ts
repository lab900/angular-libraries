import { Component } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';

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
          required: true,
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
      {
        attribute: 'somePropName2',
        title: 'Select ON OR OFF',
        editType: EditType.Checkbox,
        options: {
          readonly: () => true,
        },
      },
      {
        attribute: 'somePropName2',
        title: 'Select ON OR OFF',
        editType: EditType.Checkbox,
      },
    ],
  };
}
