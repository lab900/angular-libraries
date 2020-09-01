import { Component } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';

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
          required: true,
          min: 10000,
          max: 200000,
          steps: 5000,
        },
      },
    ],
  };
}
