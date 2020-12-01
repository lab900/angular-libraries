import { Component, ViewChild } from '@angular/core';
import { Form, EditType, FormContainerComponent } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-button-toggle-example',
  template: '<lab900-form-container [schema]="formSchema" (click)="logValue()"></lab900-form-container>',
})
export class FormFieldButtonToggleExampleComponent {
  @ViewChild(FormContainerComponent)
  public form: FormContainerComponent<any>;

  public formSchema: Form = {
    fields: [
      {
        attribute: 'buttonGroupAttribute',
        title: 'Select yes or no',
        editType: EditType.ButtonToggle,
        options: {
          required: true,
          buttonOptions: [
            {
              value: true,
              label: 'yes',
              buttonClass: 'dsfkldsjflkdsjf',
            },
            {
              value: false,
              label: 'no',
            },
          ],
        },
      },
      {
        attribute: 'value',
        editType: EditType.Row,
        options: { colspan: 12 },
        nestedFields: [
          {
            attribute: 'buttonGroupAttribute2',
            editType: EditType.ButtonToggle,
            options: {
              required: true,
              buttonOptions: [
                {
                  value: 'edit',
                  icon: { name: 'edit' },
                },
                {
                  value: 'delete',
                  icon: { name: 'delete' },
                },
              ],
            },
          },
          {
            attribute: 'textInput',
            title: 'Text Input',
            editType: EditType.Input,
          },
        ],
      },
    ],
  };

  public logValue() {
    console.log(this.form.value);
  }
}
