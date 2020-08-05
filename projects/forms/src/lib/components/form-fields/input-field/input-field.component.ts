import { Component } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { InputFieldOptions } from '../../../models/FormField';

@Component({
  selector: 'lab900-input-field',
  templateUrl: './input-field.component.html',
})
export class InputFieldComponent extends FormComponent<InputFieldOptions> {
  public get inputType(): 'text' | 'number' | 'email' | 'password' {
    return (this.options && this.options.type) || 'text';
  }
}
