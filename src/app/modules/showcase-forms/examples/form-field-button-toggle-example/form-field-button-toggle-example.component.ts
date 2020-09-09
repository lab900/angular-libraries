import { Component, ViewChild } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';
import { FormContainerComponent } from '../../../../../../projects/forms/src/lib/components/form-container/form-container.component';

@Component({
  selector: 'lab900-form-field-button-group-example',
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
          values: [
            {
              value: true,
              label: 'yes',
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
              values: [
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
            options: { colspan: 10 },
          },
        ],
      },
    ],
  };

  logValue() {
    console.log(this.form.value);
  }
}
