import { Component } from '@angular/core';
import { Form, EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-repeater-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldRepeaterExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Add something',
        editType: EditType.Repeater,
        nestedFields: [{ attribute: 'value', editType: EditType.Input, title: 'Repeated field' }],
      },
    ],
  };
}
