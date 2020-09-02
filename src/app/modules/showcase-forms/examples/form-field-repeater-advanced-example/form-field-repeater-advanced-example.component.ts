import { Component } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';

@Component({
  selector: 'lab900-form-field-advanced-repeater-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldRepeaterAdvancedExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Add something nested',
        editType: EditType.Repeater,
        nestedFields: [
          {
            attribute: 'value',
            editType: EditType.Row,
            nestedFields: [
              { editType: EditType.Icon, options: { icon: 'arrow_downward' } },
              { attribute: 'two', editType: EditType.Input, title: 'Repeated field', options: { colspan: 1 } },
            ],
          },
        ],
      },
    ],
  };
}
