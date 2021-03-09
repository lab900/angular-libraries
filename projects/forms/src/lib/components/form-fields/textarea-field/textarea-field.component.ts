import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lab900-textarea-field',
  templateUrl: './textarea-field.component.html',
  styles: ['textarea { min-height: 100px; }'],
})
export class TextareaFieldComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
