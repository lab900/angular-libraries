import { Component } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';

@Component({
  selector: 'lab900-form-field-textarea-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldTextareaExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'Textarea',
        title: 'Textarea',
        editType: EditType.TextArea,
      },
    ],
  };
}
