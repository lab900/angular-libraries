import { Component, ViewChild } from '@angular/core';
import { EditType, Form, FormContainerComponent } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-repeater-example',
  template: '<lab900-form-container [schema]="formSchema" (click)="logValue(form)" #form></lab900-form-container>',
})
export class FormFieldRepeaterExampleComponent {
  @ViewChild(FormContainerComponent, { static: true })
  public form: FormContainerComponent<any>;

  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Add something',
        editType: EditType.Repeater,
        nestedFields: [
          {
            attribute: 'value',
            editType: EditType.Input,
            title: 'Repeated field',
            options: {
              defaultValue: () => '234',
            },
          },
        ],
      },
    ],
  };

  logValue(form: any) {
    console.log(form);
  }
}
