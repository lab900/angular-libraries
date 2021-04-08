import { Component, ViewChild } from '@angular/core';
import { EditType, Form, FormContainerComponent, Lab900File } from '@lab900/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lab900-form-field-file-upload-example',
  template:
    '<lab900-form-container #formContainer [schema]="formSchema" [data]="formData"></lab900-form-container><button mat-raised-button color="primary" (click)="validate()">Submit</button>',
})
export class FormFieldFileUploadExampleComponent {
  @ViewChild('formContainer')
  public formContainer: FormContainerComponent<any>;

  public formSchema: Form = {
    fields: [
      {
        attribute: 'files',
        title: 'My files',
        editType: EditType.FilePreview,
        options: {
          multiple: true,
          accept: 'image/*',
          canEditFileMetaData: true,
          fileMetaDataConfig: {
            fields: [
              {
                attribute: 'fileName',
                title: 'File name',
                editType: EditType.Input,
              },
            ],
          },
          httpCallback: (image: Lab900File) => this.http.get(image?.imageSrc, { responseType: 'blob' }),
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
        imageSrc: '',
      },
    ],
  };
  constructor(private http: HttpClient) {}

  public validate(): void {
    console.log(this.formContainer.form.controls.files.value);
  }
}
