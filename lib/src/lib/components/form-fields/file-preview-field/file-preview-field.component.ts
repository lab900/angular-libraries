import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../AbstractFormComponent';
import { FormDialogDirective } from '../../../directives/form-dialog.directive';
import { Lab900File } from '../../../models/Lab900File';
import { FormDialogComponent } from '../../form-dialog/form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewModalComponent } from '../../image-preview-modal/image-preview-modal.component';
import { fetchImageBase64 } from '../../../utils/image.utils';
import { FormFieldFilePreview } from './file-preview-field.model';

@Component({
  selector: 'lab900-file-preview-field',
  templateUrl: './file-preview-field.component.html',
  styleUrls: ['./file-preview-field.component.scss'],
})
export class FilePreviewFieldComponent<
  T
> extends FormComponent<FormFieldFilePreview> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  @ViewChild('fileField')
  private fileFieldComponent: ElementRef;

  @ViewChild('FormDialogDirective')
  private lab900FormDialog: FormDialogDirective<T>;

  constructor(translateService: TranslateService, private dialog: MatDialog) {
    super(translateService);
  }

  get files(): Lab900File[] {
    return (this.fieldControl?.value as Lab900File[]) ?? [];
  }

  public fileChange(event: Event): void {
    const fileList: FileList | null = (event.target as HTMLInputElement).files;
    const fileArray: File[] = [];
    if (fileList) {
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
    const image = file as Lab900File;
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
    const lab900File = file as Lab900File;
    lab900File.fileName = file.name;
    this.setFieldControlValue([...this.files, lab900File]);
  }

  public removeFile(file: Lab900File): void {
    const files: Lab900File[] = this.files;
    files.splice(this.getFileIndex(file), 1);
    this.setFieldControlValue(files);
    this.fileFieldComponent.nativeElement.value = null;
  }

  public onMetaDataChanged(
    data: T,
    originalData?: Lab900File
  ): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const files = this.files;
      const index = this.getFileIndex(originalData);
      if (index === -1) {
        console.error(`Couldn't find file in list`);
      }
      Object.assign(originalData, data);
      files[index] = originalData;
      this.setFieldControlValue(files);
      resolve(true);
    });
  }

  private getFileIndex(file: Lab900File): number {
    return this.files.findIndex(
      (listFile: Lab900File) =>
        listFile.fileName === file.fileName &&
        listFile.type === file.type &&
        listFile.size === file.size
    );
  }

  public handleImageClick(file: Lab900File): void {
    if (this.options?.canEditFileMetaData && !this.fieldIsReadonly) {
      this.openMetaDataDialog(file);
    } else if (file.imageSrc != null) {
      this.openPreviewDialog(file);
    }
  }

  private openMetaDataDialog(file: Lab900File): void {
    this.dialog.open(FormDialogComponent, {
      data: {
        schema: this.options?.fileMetaDataConfig,
        data: file,
        submit: this.onMetaDataChanged.bind(this),
      },
    });
  }

  public openPreviewDialog(file: Lab900File): void {
    if (file.imageBase64 != null) {
      this.dialog.open(ImagePreviewModalComponent, {
        data: {
          image: file,
        },
      });
    } else if (this.options?.httpCallback) {
      this.addSubscription(
        fetchImageBase64(this.options.httpCallback, file, (result) => {
          file.imageBase64 = result as string;
          this.dialog.open(ImagePreviewModalComponent, {
            data: {
              image: file,
            },
          });
        }),
        () => {}
      );
    }
  }

  public showOverlay(file: Lab900File): boolean {
    if (typeof this.options?.showOverlay === 'function') {
      return this.options?.showOverlay(file);
    } else {
      return this.options?.showOverlay ?? false;
    }
  }

  private setFieldControlValue(files: Lab900File[]): void {
    this.fieldControl.setValue(files);
    this.fieldControl.markAsDirty();
    this.fieldControl.markAsTouched();
  }
}
