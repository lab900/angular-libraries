import { Component, HostBinding, Inject } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { MultiLangInputFieldOptions } from '../../../models/FormField';
import { LAB900_FORM_MODULE_SETTINGS, Lab900FormModuleSettings } from '../../../models/Lab900FormModuleSettings';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-multi-lang-input-field',
  templateUrl: './multi-lang-input-field.component.html',
})
export class MultiLangInputFieldComponent extends FormComponent<MultiLangInputFieldOptions> {
  @HostBinding('class')
  public classList = `lab900-form-field`;

  constructor(@Inject(LAB900_FORM_MODULE_SETTINGS) public setting: Lab900FormModuleSettings, translateService: TranslateService) {
    super(translateService);
  }
}
