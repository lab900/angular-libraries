import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

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
  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }
}
