import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../../models/IFormComponent';
import { RangeSliderFieldOptions } from '../../../models/FormField';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-range-slider-field',
  templateUrl: './range-slider-field.component.html',
})
export class RangeSliderFieldComponent extends FormComponent<RangeSliderFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }
}
