import { Component } from '@angular/core';
import { Lab900FormConfig, EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-textarea-example',
  template: '<lab900-form [schema]="formSchema"></lab900-form>',
})
export class FormFieldTextareaExampleComponent {
  public formSchema: Lab900FormConfig = {
    fields: [
      {
        attribute: 'Textarea',
        title: 'Textarea',
        editType: EditType.TextArea,
      },
    ],
  };
}
