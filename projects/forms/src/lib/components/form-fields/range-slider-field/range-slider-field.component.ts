import { Component } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { RangeSliderFieldOptions } from '../../../models/FormField';

@Component({
  selector: 'lab900-range-slider-field',
  templateUrl: './range-slider-field.component.html',
})
export class RangeSliderFieldComponent extends FormComponent<RangeSliderFieldOptions> {}
