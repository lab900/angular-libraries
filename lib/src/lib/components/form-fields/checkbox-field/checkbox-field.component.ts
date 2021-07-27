import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../AbstractFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { CheckboxFieldModel } from './checkbox-field.model';

@Component({
  selector: 'lab900-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.css'],
  animations: [matFormFieldAnimations.transitionMessages],
})
export class CheckboxFieldComponent extends FormComponent<CheckboxFieldModel> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(translateService: TranslateService) {
    super(translateService);
  }

  public get indeterminate(): boolean {
    return (
      !this.options?.disabledIndeterminate &&
      this.group.get(this.schema.attribute).value === null
    );
  }
}
