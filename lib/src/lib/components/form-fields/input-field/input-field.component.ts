import { Component, HostBinding, Inject } from '@angular/core';
import { FormComponent } from '../../AbstractFormComponent';
import { TranslateService } from '@ngx-translate/core';
import {
  LAB900_FORM_MODULE_SETTINGS,
  Lab900FormModuleSettings,
} from '../../../models/Lab900FormModuleSettings';
import { FormFieldInput } from './input-field.model';

@Component({
  selector: 'lab900-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent extends FormComponent<FormFieldInput> {
  @HostBinding('class')
  public classList = `lab900-form-field`;

  public get showLengthIndicator(): boolean {
    return (
      !!this.setting?.formField?.showLengthIndicator ||
      !!this.options?.showLengthIndicator
    );
  }

  public constructor(
    @Inject(LAB900_FORM_MODULE_SETTINGS)
    public setting: Lab900FormModuleSettings,
    translateService: TranslateService
  ) {
    super(translateService);
  }
}
