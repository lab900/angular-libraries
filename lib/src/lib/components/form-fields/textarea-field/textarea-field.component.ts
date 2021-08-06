import { Component, HostBinding, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../AbstractFormComponent';
import { FormFieldTextarea } from './textarea-field.model';
import {
  LAB900_FORM_MODULE_SETTINGS,
  Lab900FormModuleSettings,
} from '../../../models/Lab900FormModuleSettings';

@Component({
  selector: 'lab900-textarea-field',
  templateUrl: './textarea-field.component.html',
  styles: ['textarea { min-height: 100px; }'],
})
export class TextareaFieldComponent extends FormComponent<FormFieldTextarea> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

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
