import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { InputFieldOptions } from '../../../models/FormField';

@Component({
  selector: 'lab900-input-field',
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent extends FormComponent<InputFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public get inputType(): 'text' | 'number' | 'email' | 'password' {
    return (this.options && this.options.type) || 'text';
  }
}
