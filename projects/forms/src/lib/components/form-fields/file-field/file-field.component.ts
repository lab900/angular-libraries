import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lab900-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss'],
})
export class FileFieldComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';
}
