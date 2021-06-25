import { Component } from '@angular/core';
import { Lab900FormConfig, EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-date-time-picker-example',
  template: '<lab900-form [schema]="formSchema"></lab900-form>',
})
export class FormFieldDateTimePickerExampleComponent {
  public formSchema: Lab900FormConfig = {
    fields: [
      {
        attribute: 'test',
        title: 'Select a date & time',
        editType: EditType.DateTime,
        conditions: [
          {
            dependOn: 'urgent',
            disableIfEquals: true,
            onChangeFn: (v, control) => {
              if (v === true) {
                control.reset();
              }
            },
          },
        ],
      },
      {
        attribute: 'urgent',
        title: 'Urgent?',
        editType: EditType.Checkbox,
      },
    ],
  };
}
