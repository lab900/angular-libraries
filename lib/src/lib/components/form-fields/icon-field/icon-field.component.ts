import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../AbstractFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { FormFieldIcon } from './icon-field.model';

@Component({
  selector: 'lab900-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['./icon-field.component.scss'],
})
export class IconFieldComponent extends FormComponent<FormFieldIcon> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(translateService: TranslateService) {
    super(translateService);
  }
}
