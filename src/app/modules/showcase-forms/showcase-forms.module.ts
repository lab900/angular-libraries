import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseFormsRoutingModule } from './showcase-forms-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormFieldRepeaterPageComponent } from './pages/form-field-repeater-page/form-field-repeater-page.component';
import { FormFieldInputPageComponent } from './pages/form-field-input-page/form-field-input-page.component';
import { FormFieldDatepickerPageComponent } from './pages/form-field-datepicker-page/form-field-datepicker-page.component';
import { FormFieldRadioButtonsPageComponent } from './pages/form-field-radio-buttons-page/form-field-radio-buttons-page.component';
import { FormContainerPageComponent } from './pages/form-container-page/form-container-page.component';
import { FormFieldRangeSliderPageComponent } from './pages/form-field-range-slider-page/form-field-range-slider-page.component';

import { FormFieldRepeaterExampleComponent } from './examples/form-field-repeater-example/form-field-repeater-example.component';
import { FormFieldRepeaterFixedExampleComponent } from './examples/form-field-repeater-fixed-example/form-field-repeater-fixed-xample.component';
import { FormFieldInputsExampleComponent } from './examples/form-field-inputs-example/form-field-inputs-example.component';
import { FormFieldTextareaExampleComponent } from './examples/form-field-textarea-example/form-field-textarea-example.component';
import { FormFieldRadioButtonsExampleComponent } from './examples/form-field-radio-buttons-example/form-field-radio-buttons-example.component';
import { FormFieldRangeSliderExampleComponent } from './examples/form-field-range-slider-example/form-field-range-slider-example.component';

const pages = [
  FormFieldRepeaterPageComponent,
  FormFieldInputPageComponent,
  FormFieldDatepickerPageComponent,
  FormContainerPageComponent,
  FormFieldRadioButtonsPageComponent,
  FormFieldRangeSliderPageComponent,
];

const examples = [
  FormFieldRepeaterExampleComponent,
  FormFieldRepeaterFixedExampleComponent,
  FormFieldInputsExampleComponent,
  FormFieldTextareaExampleComponent,
  FormFieldRadioButtonsExampleComponent,
  FormFieldRangeSliderExampleComponent,
];

@NgModule({
  declarations: [...pages, ...examples],
  imports: [CommonModule, SharedModule, ShowcaseFormsRoutingModule],
})
export class ShowcaseFormsModule {}
