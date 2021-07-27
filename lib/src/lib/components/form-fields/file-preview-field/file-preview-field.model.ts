import { EditType } from '../../../models/editType';
import {
  FormFieldBase,
  FormFieldBaseOptions,
} from '../../../models/form-field-base';
import { Lab900FormConfig } from '../../../models/Lab900FormConfig';
import { Lab900File } from '../../../models/Lab900File';
import { Observable } from 'rxjs';

export interface FormFieldFilePreviewOptions extends FormFieldBaseOptions {
  fileUploadButtonText?: string;
  canEditFileMetaData?: boolean;
  fileMetaDataConfig?: Lab900FormConfig;
  httpCallback?: (image: Lab900File) => Observable<Blob>;
  showOverlay: boolean | ((data?: any) => boolean);
  multiple?: boolean;
  accept?: string;
  overlay?: {
    backgroundColor: string;
    textColor: string;
    text: string;
  };
}

export interface FormFieldFilePreview<T extends string | number = string>
  extends FormFieldBase<T, FormFieldFilePreviewOptions> {
  editType: EditType.FilePreview;
}
