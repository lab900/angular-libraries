import { Component } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { RadioButtonsFieldOptions } from '../../../models/FormField';

@Component({
  selector: 'lab900-radio-buttons-field',
  templateUrl: './radio-buttons-field.component.html',
})
export class RadioButtonsFieldComponent extends FormComponent<RadioButtonsFieldOptions> {}
