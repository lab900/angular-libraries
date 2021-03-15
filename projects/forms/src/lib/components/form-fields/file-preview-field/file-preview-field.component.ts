import { AfterViewInit, Component, HostBinding, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../../models/IFormComponent';
import { FilePreviewFieldOptions } from '../../../models/FormField';
import { FormDialogDirective } from '../../../directives/form-dialog.directive';
import { MatFileFieldComponent } from '../mat-file-field/mat-file-field.component';
import { FileInput } from '../../../models/FileInput';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'lab900-file-preview-field',
  templateUrl: './file-preview-field.component.html',
  styleUrls: ['./file-preview-field.component.scss'],
})
export class FilePreviewFieldComponent<T> extends FormComponent<FilePreviewFieldOptions> implements AfterViewInit {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  @ViewChild('fileField')
  private fileFieldComponent: MatFileFieldComponent;

  @ViewChild('FormDialogDirective')
  private lab900FormDialog: FormDialogDirective<T>;

  public files: BehaviorSubject<Image[]> = new BehaviorSubject([]);

  constructor(translateService: TranslateService) {
    super(translateService);
  }

  public ngAfterViewInit(): void {
    this.files.subscribe((images) => {
      this.updateFormValue();
    });
    this.fileFieldComponent.registerOnChange((fileInput: FileInput) => {
      this.filesAdded(fileInput);
    });
  }

  public addFiles(): void {
    this.fileFieldComponent.open();
  }

  public filesAdded(fileInput: FileInput): void {
    fileInput.files.forEach((file) => {
      if (file.type.includes('image')) {
        this.readImageData(file);
      } else {
        this.files.next([...this.files.getValue(), file]);
      }
    });
    this.fileFieldComponent.value = new FileInput(this.files.getValue());
  }

  private readImageData(file: File): void {
    const reader = new FileReader();
    const image = file as Image;
    reader.onload = (event: any) => {
      image.imageSrc = event.target.result;
      this.files.next([...this.files.getValue(), image]);
      this.fileFieldComponent.value = new FileInput(this.files.getValue());
    };

    reader.onerror = (event: any) => {
      console.log('File could not be read: ' + event.target.error.code);
    };

    reader.readAsDataURL(image);
  }

  public removeFile(file: Image): void {
    const files = this.files.getValue();
    files.splice(files.indexOf(file), 1);
    this.files.next(files);
  }

  private updateFormValue(): void {
    this.fileFieldComponent.value = new FileInput(this.files.getValue());
  }

  public onMetaDataChanged(data: T, originalData?: Image): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const files = this.files.getValue();
      const index = files.indexOf(originalData);
      if (index === -1) {
        console.error(`Couldn't find file in list`);
      }
      files[index] = {
        ...originalData,
        ...data,
      };
      this.files.next(files);
      resolve(true);
    });
  }
}

interface Image extends File {
  imageSrc?: string;
}
