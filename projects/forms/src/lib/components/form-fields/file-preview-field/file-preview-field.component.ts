import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../../models/IFormComponent';
import { FilePreviewFieldOptions } from '../../../models/FormField';
import { FormDialogDirective } from '../../../directives/form-dialog.directive';
import { Image } from '../../../models/Image';
import { FormDialogComponent } from '../../form-dialog/form-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewModalComponent } from '../../image-preview-modal/image-preview-modal.component';

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

  constructor(translateService: TranslateService, private dialog: MatDialog) {
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
    this.fieldControl.markAsDirty();
  }

  public removeFile(file: File | Image): void {
    const files: Image[] | File[] = this.fieldControl.value;
    files.splice(this.getFileIndex(files, file), 1);
    this.fieldControl.setValue(files);
    this.fieldControl.markAsDirty();
    this.fileFieldComponent.nativeElement.value = null;
  }

  public onMetaDataChanged(data: T, originalData?: File | Image): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const files = this.fieldControl.value ?? [];
      const index = this.getFileIndex(files, originalData);
      if (index === -1) {
        console.error(`Couldn't find file in list`);
      }
      files[index] = {
        ...originalData,
        ...data,
      };
      this.fieldControl.setValue(files);
      this.fieldControl.markAsDirty();
      resolve(true);
    });
  }

  private getFileIndex(files: Image[] | File[], file: File | Image): number {
    return files.findIndex((listFile: Image) => listFile.name === file.name && listFile.type === file.type && listFile.size === file.size);
  }

  public handleImageClick(file: File | Image): void {
    if (this.options?.canEditFileMetaData && !this.fieldIsReadonly) {
      this.openMetaDataDialog(file);
    } else if ((file as Image).imageSrc != null) {
      this.openPreviewDialog(file as Image);
    }
  }

  private openMetaDataDialog(file: File | Image): void {
    this.dialog.open(FormDialogComponent, {
      data: {
        schema: this.options?.fileMetaDataConfig,
        data: file,
        submit: this.onMetaDataChanged.bind(this),
      },
    });
  }

  private openPreviewDialog(file: Image): void {
    this.dialog.open(ImagePreviewModalComponent, {
      data: {
        image: file,
      },
    });
  }

  public showOverlay(file: Image, options: FilePreviewFieldOptions): boolean {
    if (typeof options?.showOverlay === 'function') {
      return options?.showOverlay(file);
    } else {
      return options?.showOverlay ?? false;
    }
  }
}
