import { Component, ViewChild } from '@angular/core';
import {
  EditType,
  Lab900FormConfig,
  Lab900Form,
  Lab900File,
} from '@lab900/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lab900-form-field-file-upload-example',
  template:
    '<lab900-form [schema]="formSchema" [data]="formData"></lab900-form><button mat-raised-button color="primary" (click)="validate()">Submit</button>',
})
export class FormFieldFileUploadExampleComponent {
  @ViewChild(Lab900Form)
  public formContainer: Lab900Form<any>;

  public formSchema: Lab900FormConfig = {
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
                attribute: 'fileName',
                title: 'File name',
                editType: EditType.Input,
              },
            ],
          },
          httpCallback: (image: Lab900File) =>
            this.http.get(image?.imageSrc, { responseType: 'blob' }),
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
        fileName: 'file.jpg',
        delicate: false,
        imageSrc:
          'https://media-exp1.licdn.com/dms/image/C560BAQHHSRGRgKfSFQ/company-logo_200_200/0/1542017911828?e=2159024400&v=beta&t=mNV_FUsqSBIXoI-HFA88TpUP9kX8JO3AqoK_aT2SQ_E',
      },
    ],
  };

  public constructor(private http: HttpClient) {}

  public validate(): void {
    console.log(this.formContainer.form.controls.files.value);
  }
}
