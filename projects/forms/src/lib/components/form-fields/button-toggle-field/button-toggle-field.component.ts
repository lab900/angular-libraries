import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../../models/IFormComponent';
import { ButtonToggleFieldOptions } from '../../../models/FormField';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-button-toggle-field',
  templateUrl: './button-toggle-field.component.html',
})
export class ButtonToggleFieldComponent extends FormComponent<ButtonToggleFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }
}
