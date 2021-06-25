import { Component, Input } from '@angular/core';
import { Icon } from '../../models/form-field-base';

@Component({
  selector: 'lab900-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input()
  public icon: Icon;
}
