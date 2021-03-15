import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { FileFieldOptions } from '../../../models/FormField';

/**
 * @deprecated in favor of FilePreviewFieldComponent
 */
@Component({
  selector: 'lab900-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss'],
})
export class FileFieldComponent extends FormComponent<FileFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';
  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
