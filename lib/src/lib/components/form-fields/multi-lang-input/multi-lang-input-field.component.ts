import { Component, HostBinding, Inject } from '@angular/core';
import { FormComponent } from '../../AbstractFormComponent';
import {
  LAB900_FORM_MODULE_SETTINGS,
  Lab900FormModuleSettings,
} from '../../../models/Lab900FormModuleSettings';
import { TranslateService } from '@ngx-translate/core';
import { FormFieldMultiLang } from './multi-lang-input-field.model';

@Component({
  selector: 'lab900-multi-lang-input-field',
  templateUrl: './multi-lang-input-field.component.html',
})
export class MultiLangInputFieldComponent extends FormComponent<FormFieldMultiLang> {
  @HostBinding('class')
  public classList = `lab900-form-field`;

  public constructor(
    @Inject(LAB900_FORM_MODULE_SETTINGS)
    public setting: Lab900FormModuleSettings,
    translateService: TranslateService
  ) {
    super(translateService);
  }
}
