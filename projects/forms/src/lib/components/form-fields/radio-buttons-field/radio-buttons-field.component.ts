import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../../models/IFormComponent';
import { RadioButtonsFieldOptions } from '../../../models/FormField';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-radio-buttons-field',
  templateUrl: './radio-buttons-field.component.html',
})
export class RadioButtonsFieldComponent extends FormComponent<RadioButtonsFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }
}
