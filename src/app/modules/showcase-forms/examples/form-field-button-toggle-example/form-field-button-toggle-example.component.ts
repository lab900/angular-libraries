import { Component, ViewChild } from '@angular/core';
import { EditType, Lab900FormConfig, Lab900Form } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-button-toggle-example',
  template:
    '<lab900-form [schema]="formSchema" (click)="logValue()" [data]="formData"></lab900-form>',
})
export class FormFieldButtonToggleExampleComponent {
  @ViewChild(Lab900Form)
  public form: Lab900Form<any>;

  public formSchema: Lab900FormConfig = {
    fields: [
      {
        attribute: 'buttonGroupAttribute',
        title: 'Select yes or no',
        editType: EditType.ButtonToggle,
        options: {
          required: true,
          buttonOptions: [
            {
              value: Involvement.VICTIM,
              label: 'yes',
              buttonClass: 'dsfkldsjflkdsjf',
            },
            {
              value: Involvement.RELATED,
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
                  label: 'one',
                  icon: { name: 'delete', position: 'right' },
                },
                {
                  value: 'delete',
                  label: 'two',
                  icon: { name: 'delete', position: 'left' },
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

  public formData: any = {
    buttonGroupAttribute: 'VICTIM',
  };

  public logValue(): void {
    console.log(this.form.value);
  }
}

export enum Involvement {
  VICTIM = 'VICTIM',
  RELATED = 'RELATED',
  MISSING = 'MISSING',
}
