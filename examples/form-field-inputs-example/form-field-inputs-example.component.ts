import { Component } from '@angular/core';
import { Form, EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-inputs-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldInputsExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'textInput1',
        title: 'Text Input Hidden',
        editType: EditType.Input,
        options: { hide: true },
      },
      {
        attribute: 'textInput2',
        title: 'Text Input',
        editType: EditType.Input,
        options: { required: true },
        icon: { name: 'search', position: 'left' },
      },
      {
        attribute: 'textInput3',
        title: 'Text Input',
        editType: EditType.Input,
        icon: { name: 'search', position: 'right' },
      },
      {
        attribute: 'emailInput',
        title: 'Email Input',
        editType: EditType.Input,
        options: {
          type: 'email',
        },
      },
      {
        attribute: 'emailInput',
        title: 'Number Input',
        editType: EditType.Input,
        options: {
          type: 'number',
        },
      },
      {
        attribute: 'emailInput',
        title: 'Password Input',
        editType: EditType.Input,
        options: {
          type: 'password',
        },
      },
      {
        attribute: 'mask',
        title: 'Mask',
        editType: EditType.Input,
        options: {
          mask: '00.00.00-000.00',
        },
      },
      {
        attribute: 'select',
        editType: EditType.Select,
        options: {
          hint: { value: 'Show a hint', hideHintOnValidValue: true },
          values: [
            { value: 1, label: '1' },
            { value: 2, label: '2' },
          ],
        },
      },
    ],
  };
}
