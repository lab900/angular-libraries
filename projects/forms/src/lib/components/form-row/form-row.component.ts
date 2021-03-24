import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../models/IFormComponent';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { FormFieldUtils } from '../../utils/form-field.utils';
import { FieldOptions, FormField } from '../../models/FormField';

@Component({
  selector: 'lab900-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss'],
  animations: [matFormFieldAnimations.transitionMessages],
})
export class FormRowComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  constructor(translateService: TranslateService) {
    super(translateService);
  }

  get visible(): boolean {
    if (this.options && this.options.visibleFn) {
      return this.options.visibleFn(this);
    }
    return true;
  }

  public rowIsReadonly(field: FormField): boolean {
    return field.options?.readonly != null
      ? FormFieldUtils.isReadOnly(field.options, this.group.value, this)
      : FormFieldUtils.isReadOnly(this.options, this.group.value, this);
  }

  public isHidden(field: FormField<FieldOptions>): boolean {
    return FormFieldUtils.isHidden(field.options, this.group);
  }
}
