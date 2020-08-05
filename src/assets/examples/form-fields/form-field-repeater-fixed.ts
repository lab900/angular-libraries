import { Component } from '@angular/core';
import { Form, EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-repeater-fixed-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldRepeaterFixedExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Fill the 3 fields',
        editType: EditType.Repeater,
        nestedFields: [{ attribute: '', editType: EditType.Input, title: 'Repeated field' }],
        options: {
          minRows: 3,
          fixedList: true,
        },
      },
    ],
  };
}
