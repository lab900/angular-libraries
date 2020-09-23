import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../models/IFormComponent';
import { FieldOptions } from '../../models/FormField';

@Component({
  selector: 'lab900-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss'],
})
export class FormRowComponent extends FormComponent<FieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  constructor(translateService: TranslateService) {
    super(translateService);
  }

  colspan(options: FieldOptions) {
    return options == null || !options.colspan
      ? {}
      : { flex: `${(100 * (options.colspan || 1)) / 12} 1 ${options.colspan === 12 ? '100%' : `${(100 * (options.colspan || 1)) / 12}%`}` };
  }

  get visible(): boolean {
    if (this.options && this.options.visibleFn) {
      return this.options.visibleFn(this);
    }
    return true;
  }
}
