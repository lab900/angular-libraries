import { Component } from '@angular/core';
import { Form, EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-repeater-advanced-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldRepeaterAdvancedExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Add something nested',
        editType: EditType.Repeater,
        options: {},
        nestedFields: [
          {
            attribute: 'value',
            editType: EditType.Row,
            options: { colspan: 12 },
            nestedFields: [{ attribute: 'two', editType: EditType.Input, title: 'Repeated field' }],
          },
          {
            attribute: 'value',
            editType: EditType.Row,
            options: {
              colspan: 12,
              visibleFn: (item: any) => {
                if (
                  (item.group.parent.controls as Array<any>).indexOf(item.group) ===
                  (item.group.parent.controls as Array<any>).length - 1
                ) {
                  return false;
                }
                return true;
              },
            },
            nestedFields: [{ editType: EditType.Icon, options: { icon: { name: 'arrow_downward' }, colspan: 12 } }],
          },
        ],
      },
    ],
  };
}
