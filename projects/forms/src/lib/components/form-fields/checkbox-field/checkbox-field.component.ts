import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lab900-checkbox-field',
  templateUrl: './checkbox-field.component.html',
})
export class CheckboxFieldComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';
}
