import { Component } from '@angular/core';
import { Form, EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-file-upload-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldFileUploadExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'file',
        title: 'My files',
        editType: EditType.FilePreview,
        options: {
          multiple: true,
          accept: '.png',
        },
      },
    ],
  };
}
