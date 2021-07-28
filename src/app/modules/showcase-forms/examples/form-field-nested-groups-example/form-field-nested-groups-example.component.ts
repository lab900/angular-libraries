import { Component } from '@angular/core';
import { EditType, Lab900FormConfig } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-nested-groups-example',
  template: `
    <lab900-form #form [schema]="formSchema"></lab900-form>
    <pre>{{ form?.value | json }}</pre>
  `,
})
export class FormFieldNestedGroupsExampleComponent {
  public formSchema: Lab900FormConfig = {
    fields: [
      {
        attribute: 'parentAttr', // parent property name
        editType: EditType.Row,
        nestedFields: [
          {
            editType: EditType.Input,
            attribute: 'child',
            title: 'Child',
          },
          {
            editType: EditType.Input,
            attribute: 'anotherOne',
            title: 'Child 2',
          },
        ],
      },
    ],
  };
}
