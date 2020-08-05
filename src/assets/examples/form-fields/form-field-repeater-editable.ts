import { Component } from '@angular/core';
import { Form, EditType } from '@lab900/forms';

@Component({
  selector: 'app-form-field-repeater-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldRepeaterExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Add  something',
        editType: EditType.Repeater,
        nestedFields: [
          { attribute: '', editType: EditType.Input, title: 'Repeated field' }
        ],
      },
    ],
  };
}
