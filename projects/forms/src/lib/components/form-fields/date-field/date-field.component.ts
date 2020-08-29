import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lab900-date-field',
  templateUrl: './date-field.component.html',
})
export class DateFieldComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';
}
