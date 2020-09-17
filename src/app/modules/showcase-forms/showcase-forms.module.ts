import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseFormsRoutingModule } from './showcase-forms-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormFieldRepeaterExampleComponent } from './examples/form-field-repeater-example/form-field-repeater-example.component';
import { FormFieldRepeaterFixedExampleComponent } from './examples/form-field-repeater-fixed-example/form-field-repeater-fixed-xample.component';
import { FormFieldInputsExampleComponent } from './examples/form-field-inputs-example/form-field-inputs-example.component';
import { FormFieldTextareaExampleComponent } from './examples/form-field-textarea-example/form-field-textarea-example.component';
import { FormFieldRadioButtonsExampleComponent } from './examples/form-field-radio-buttons-example/form-field-radio-buttons-example.component';
import { FormFieldRangeSliderExampleComponent } from './examples/form-field-range-slider-example/form-field-range-slider-example.component';
// tslint:disable-next-line:max-line-length
import { FormFieldAutocompleteExampleComponent } from './examples/form-field-autocomplete-example/form-field-autocomplete-example.component';
import { FormFieldRepeaterAdvancedExampleComponent } from './examples/form-field-repeater-advanced-example/form-field-repeater-advanced-example.component';
import { FormFieldButtonToggleExampleComponent } from './examples/form-field-button-toggle-example/form-field-button-toggle-example.component';
import { FormContainerExampleComponent } from './examples/component-form-container/form-container-example.component';

const examples = [
  FormFieldRepeaterExampleComponent,
  FormFieldRepeaterAdvancedExampleComponent,
  FormFieldRepeaterFixedExampleComponent,
  FormFieldInputsExampleComponent,
  FormFieldTextareaExampleComponent,
  FormFieldRadioButtonsExampleComponent,
  FormFieldRangeSliderExampleComponent,
  FormFieldAutocompleteExampleComponent,
  FormFieldButtonToggleExampleComponent,
  FormContainerExampleComponent,
];

@NgModule({
  declarations: examples,
  imports: [CommonModule, SharedModule, ShowcaseFormsRoutingModule],
})
export class ShowcaseFormsModule {}
