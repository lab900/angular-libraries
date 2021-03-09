import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { InputFieldOptions } from '../../../models/FormField';
import { TranslateService } from '@ngx-translate/core';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent extends FormComponent<InputFieldOptions> {
  @HostBinding('class')
  public classList = `lab900-form-field`;

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }

  public get inputType(): 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' {
    return (this.options && this.options.type) || 'text';
  }
}
