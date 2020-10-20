import { Component } from '@angular/core';
import { Form, EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-range-slider-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldRangeSliderExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'range',
        title: 'Large range with inputs',
        editType: EditType.RangeSlider,
        options: {
          min: 10000,
          max: 2000000,
          format: 'K-M',
          steps: 5000,
        },
      },
      {
        attribute: 'range-small',
        title: 'Small range with inputs',
        editType: EditType.RangeSlider,
        options: {
          min: 1,
          max: 10,
          steps: 1,
        },
      },
    ],
  };
}
