import { Component, HostBinding, Inject } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { InputFieldOptions } from '../../../models/FormField';
import { TranslateService } from '@ngx-translate/core';
import { LAB900_FORM_MODULE_SETTINGS, Lab900FormModuleSettings } from '../../../models/Lab900FormModuleSettings';

@Component({
  selector: 'lab900-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent extends FormComponent<InputFieldOptions> {
  @HostBinding('class')
  public classList = `lab900-form-field`;

  constructor(@Inject(LAB900_FORM_MODULE_SETTINGS) public setting: Lab900FormModuleSettings, translateService: TranslateService) {
    super(translateService);
  }

  public get inputType(): 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' {
    return this.options?.type ?? 'text';
  }
}
