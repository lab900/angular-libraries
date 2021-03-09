import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.css'],
  animations: [matFormFieldAnimations.transitionMessages],
})
export class CheckboxFieldComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }

  get indeterminate(): boolean {
    return this.group.get(this.schema.attribute).value === null;
  }
}
