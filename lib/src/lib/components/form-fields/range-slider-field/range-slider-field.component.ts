import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../AbstractFormComponent';
import { FormFieldRangeSlider } from './range-slider-field.model';

@Component({
  selector: 'lab900-range-slider-field',
  templateUrl: './range-slider-field.component.html',
})
export class RangeSliderFieldComponent extends FormComponent<FormFieldRangeSlider> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(translateService: TranslateService) {
    super(translateService);
  }
}
