import { Component } from '@angular/core';
import { EditType, Lab900FormConfig } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-nested-groups-by-attribute-example',
  template: `
    <lab900-form #form [schema]="formSchema"></lab900-form>
    <pre>{{ form?.value | json }}</pre>
  `,
})
export class FormFieldNestedGroupsByAttributeExampleComponent {
  public formSchema: Lab900FormConfig = {
    fields: [
      {
        editType: EditType.Row,
        nestedFields: [
          {
            editType: EditType.Input,
            attribute: 'parentAttr.child',
            title: 'Child',
          },
          {
            editType: EditType.Input,
            attribute: 'someOtherProp',
            title: 'someOtherProp',
          },
          {
            editType: EditType.Input,
            attribute: 'parentAttr.anotherOne',
            title: 'Child 2',
          },
        ],
      },
    ],
  };
}
