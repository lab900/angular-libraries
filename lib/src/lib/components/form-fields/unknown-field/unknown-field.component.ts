import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../AbstractFormComponent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-unknown-field',
  template: ` <div>
    <p>Unknown schema:</p>
    <pre>{{ schema | json }}</pre>
  </div>`,
})
export class UnknownFieldComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';
  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
