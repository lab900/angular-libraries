import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../AbstractFormComponent';
import { FormFieldRadioButtons } from './radio-buttons-field.model';

@Component({
  selector: 'lab900-radio-buttons-field',
  templateUrl: './radio-buttons-field.component.html',
})
export class RadioButtonsFieldComponent extends FormComponent<FormFieldRadioButtons> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
