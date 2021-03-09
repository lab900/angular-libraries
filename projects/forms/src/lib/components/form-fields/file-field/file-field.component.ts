import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { FileFieldOptions } from '../../../models/FormField';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss'],
})
export class FileFieldComponent extends FormComponent<FileFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';
  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }
}
