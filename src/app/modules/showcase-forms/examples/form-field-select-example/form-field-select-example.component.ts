import { Component } from '@angular/core';
import { EditType, Lab900FormConfig } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-select-example',
  template: '<lab900-form [schema]="formSchema"></lab900-form>',
})
export class FormFieldSelectExampleComponent {
  public formSchema: Lab900FormConfig = {
    fields: [
      {
        attribute: '',
        editType: EditType.Row,
        nestedFields: [
          {
            attribute: 'somePropName',
            title: 'Select yes or no',
            editType: EditType.Select,
            options: {
              selectOptions: [
                {
                  value: true,
                  label: 'yes',
                },
                {
                  value: false,
                  label: 'no',
                },
              ],
              colspan: 6,
              required: (data) => {
                return data?.secondPropName;
              },
            },
          },
          {
            attribute: 'secondPropName',
            title: 'Select yes or no',
            editType: EditType.Select,
            options: {
              selectOptions: [
                {
                  value: true,
                  label: 'yes',
                },
                {
                  value: false,
                  label: 'no',
                },
              ],
              colspan: 6,
            },
          },
        ],
      },
      {
        attribute: '',
        editType: EditType.Row,
        nestedFields: [
          {
            attribute: 'dependOnCheck',
            title: 'Select yes or no',
            editType: EditType.Select,
            options: {
              colspan: 6,
              selectOptions: [
                {
                  value: 'whatever',
                  label: 'checked yes',
                },
              ],
            },
          },
        ],
      },
    ],
  };
}
