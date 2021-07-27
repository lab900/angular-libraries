import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../AbstractFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { FormFieldFile } from './file-field.model';

/**
 * @deprecated in favor of FilePreviewFieldComponent
 */
@Component({
  selector: 'lab900-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss'],
})
export class FileFieldComponent extends FormComponent<FormFieldFile> {
  @HostBinding('class')
  public classList = 'lab900-form-field';
  public constructor(translateService: TranslateService) {
    super(translateService);
  }
}
