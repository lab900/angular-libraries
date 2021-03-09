import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { IconFieldOptions } from '../../../models/FormField';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['./icon-field.component.scss'],
})
export class IconFieldComponent extends FormComponent<IconFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
