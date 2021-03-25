import { Component } from '@angular/core';
import { EditType, Form } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-file-upload-example',
  template: '<lab900-form-container [schema]="formSchema" [data]="formData"></lab900-form-container>',
})
export class FormFieldFileUploadExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'files',
        title: 'My files',
        editType: EditType.FilePreview,
        options: {
          multiple: true,
          accept: 'image/*',
          canEditFileMetaData: false,
          fileMetaDataConfig: {
            fields: [
              {
                attribute: 'name',
                title: 'File name',
                editType: EditType.Input,
              },
            ],
          },
          overlay: {
            backgroundColor: '#c93b2e',
            textColor: 'white',
            text: 'delicate',
          },
        },
      },
    ],
  };
  public formData = {
    files: [
      {
        name: 'file.jpg',
        delicate: true,
      },
    ],
  };
}
