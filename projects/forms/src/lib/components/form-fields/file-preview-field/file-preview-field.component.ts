import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../../models/IFormComponent';
import { FilePreviewFieldOptions } from '../../../models/FormField';
import { FormDialogDirective } from '../../../directives/form-dialog.directive';
import { Image } from '../../../models/Image';

@Component({
  selector: 'lab900-file-preview-field',
  templateUrl: './file-preview-field.component.html',
  styleUrls: ['./file-preview-field.component.scss'],
})
export class FilePreviewFieldComponent<T> extends FormComponent<FilePreviewFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  @ViewChild('fileField')
  private fileFieldComponent: ElementRef;

  @ViewChild('FormDialogDirective')
  private lab900FormDialog: FormDialogDirective<T>;

  constructor(translateService: TranslateService) {
    super(translateService);
  }

  get files(): File[] | Image[] {
    return this.fieldControl?.value as File[] | Image[];
  }

  public fileChange(event: Event): void {
    const fileList: FileList | null = (event.target as HTMLInputElement).files;
    const fileArray: File[] = [];
    if (fileList) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < fileList.length; i++) {
        fileArray.push(fileList[i]);
      }
    }

    this.filesAdded(fileArray);
  }

  public filesAdded(fileArray: File[]): void {
    fileArray.forEach((file) => {
      if (file.type.includes('image')) {
        this.readImageData(file);
      } else {
        this.addFileToFieldControl(file);
      }
    });
  }

  private readImageData(file: File): void {
    const reader = new FileReader();
    const image = file as Image;
    reader.onload = (event: any) => {
      image.imageSrc = event.target.result;
      this.addFileToFieldControl(file);
    };

    reader.onerror = (event: any) => {
      console.log('File could not be read: ' + event.target.error.code);
    };

    reader.readAsDataURL(image);
  }

  private addFileToFieldControl(file: File): void {
    this.fieldControl.setValue([...(this.fieldControl.value ?? []), file]);
  }

  public removeFile(file: File | Image): void {
    const files: Image[] | File[] = this.fieldControl.value;
    files.splice(files.indexOf(file), 1);
    this.fieldControl.setValue(files);
    this.fileFieldComponent.nativeElement.value = null;
  }

  public onMetaDataChanged(data: T, originalData?: Image): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const files = this.fieldControl.value ?? [];
      const index = files.indexOf(originalData);
      if (index === -1) {
        console.error(`Couldn't find file in list`);
      }
      files[index] = {
        ...originalData,
        ...data,
      };
      this.fieldControl.setValue(files);
      resolve(true);
    });
  }
}
