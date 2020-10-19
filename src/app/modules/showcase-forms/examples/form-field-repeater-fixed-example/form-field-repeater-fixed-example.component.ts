import { Component, ViewChild } from '@angular/core';
import { Form, EditType, FormContainerComponent } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-repeater-fixed-example',
  template: '<lab900-form-container [schema]="formSchema" [data]="repeaterData" (click)="logValue()" ></lab900-form-container>',
})
export class FormFieldRepeaterFixedExampleComponent {
  @ViewChild(FormContainerComponent)
  public form: FormContainerComponent<any>;

  public repeaterData = {
    repeater: [{ value: 'hello' }],
  };

  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Fill the 3 fields',
        editType: EditType.Repeater,
        nestedFields: [{ attribute: 'value', editType: EditType.Input, title: 'Repeated field' }],
        options: {
          minRows: 3,
          fixedList: true,
          required: true,
        },
      },
    ],
  };

  logValue() {
    console.log(this.form.value);
  }
}
