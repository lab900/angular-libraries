import { Component, ViewChild } from '@angular/core';
import { Form, EditType, FormContainerComponent } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-inputs-example',
  template:
    '<lab900-form-container #formContainer [schema]="formSchema"></lab900-form-container><button mat-raised-button color="primary" (click)="validate()">Submit</button>',
})
export class FormFieldInputsExampleComponent {
  @ViewChild('formContainer')
  public formContainer: FormContainerComponent<any>;

  public formSchema: Form = {
    fields: [
      {
        attribute: 'uniqueNumber',
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
          fieldMask: {
            mask: 'separator.2',
            showMaskedType: true,
          },
        },
      },
      {
        attribute: 'readOnlyInput',
        title: 'Read-only input',
        editType: EditType.Input,
        options: {
          type: 'text',
          readonly: (d: any) => {
            return d != null;
          },
          required: true,
        },
      },
    ],
  };

  public validate(): void {
    console.log(this.formContainer.valid);
  }
}
