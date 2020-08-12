import { Component } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';

@Component({
  selector: 'lab900-form-field-repeater-example',
  template: '<lab900-form-container [schema]="formSchema" [data]="data"></lab900-form-container>',
})
export class FormFieldRepeaterExampleComponent {
  public data = {
    repeater: [{ value: 'dummy field' }, { value: 'dummy field 2' }, { value: 'dummy field 3' }],
  };

  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Add  something',
        editType: EditType.Repeater,
        nestedFields: [{ attribute: 'value', editType: EditType.Input, title: 'Repeated field' }],
      },
    ],
  };
}
