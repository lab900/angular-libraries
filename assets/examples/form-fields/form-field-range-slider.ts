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
        title: 'Range with inputs',
        editType: EditType.RangeSlider,
        options: {
          min: 0,
          max: 100,
          steps: 1,
        },
      },
    ],
  };
}
