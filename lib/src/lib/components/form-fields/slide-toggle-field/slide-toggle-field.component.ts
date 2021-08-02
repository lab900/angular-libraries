import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../AbstractFormComponent';
import { FormFieldSlideToggle } from './slide-toggle-field.model';

@Component({
  selector: 'lab900-slide-toggle-field',
  templateUrl: './slide-toggle-field.component.html',
})
export class SlideToggleFieldComponent extends FormComponent<FormFieldSlideToggle> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
