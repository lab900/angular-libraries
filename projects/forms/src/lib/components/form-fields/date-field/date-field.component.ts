import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-date-field',
  templateUrl: './date-field.component.html',
})
export class DateFieldComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';
  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
