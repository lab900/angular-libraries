import { Component } from '@angular/core';
import { EditType, Form, Image } from '@lab900/forms';
import { HttpClient } from '@angular/common/http';

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
          httpCallback: (image: Image) => this.http.get(image?.imageSrc, { responseType: 'blob' }),
          showOverlay: (data: any) => {
            return data.delicate;
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
        delicate: false,
        imageSrc: '',
      },
    ],
  };
  constructor(private http: HttpClient) {}
}
