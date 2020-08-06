import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lab900-textarea-field',
  templateUrl: './textarea-field.component.html',
})
export class TextareaFieldComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';
}
