import { Component } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';
import { IFormComponent } from 'projects/forms/src/lib/models/IFormComponent';

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
        options: {},
        nestedFields: [
          {
            attribute: 'value',
            editType: EditType.Row,
            options: { colspan: 12 },
            nestedFields: [
              {
                attribute: 'value',
                editType: EditType.Row,
                options: { colspan: 12 },
                nestedFields: [{ attribute: 'two', editType: EditType.Input, title: 'Repeated field', options: { colspan: 1 } }],
              },
              {
                attribute: 'value',
                editType: EditType.Row,
                options: {
                  colspan: 12,
                  visibleFn: (item: IFormComponent<any>) => {
                    if (
                      (item.group.parent.controls as Array<any>).indexOf(item.group) ===
                      (item.group.parent.controls as Array<any>).length - 1
                    ) {
                      return false;
                    }
                    return true;
                  },
                },
                nestedFields: [{ editType: EditType.Icon, options: { icon: 'arrow_downward' } }],
              },
            ],
          },
        ],
      },
    ],
  };
}
