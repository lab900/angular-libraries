import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { ButtonToggleFieldOptions } from '../../../models/FormField';

@Component({
  selector: 'lab900-button-toggle-field',
  templateUrl: './button-toggle-field.component.html',
})
export class ButtonToggleFieldComponent extends FormComponent<ButtonToggleFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';
}
