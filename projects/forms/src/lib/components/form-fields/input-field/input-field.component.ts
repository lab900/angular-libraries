import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { InputFieldOptions } from '../../../models/FormField';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent extends FormComponent<InputFieldOptions> {
  constructor(translateService: TranslateService) {
    super(translateService);
  }

  public get inputType(): 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' {
    return (this.options && this.options.type) || 'text';
  }
}
