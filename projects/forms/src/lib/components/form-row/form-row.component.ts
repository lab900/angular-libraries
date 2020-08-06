import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../models/IFormComponent';

@Component({
  selector: 'lab900-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss'],
})
export class FormRowComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';
}
