import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseFormsRoutingModule } from './showcase-forms-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormFieldRepeaterExampleComponent } from './examples/form-field-repeater-example/form-field-repeater-example.component';
import { FormFieldRepeaterFixedExampleComponent } from './examples/form-field-repeater-fixed-example/form-field-repeater-fixed-example.component';
import { FormFieldInputsExampleComponent } from './examples/form-field-inputs-example/form-field-inputs-example.component';
import { FormFieldTextareaExampleComponent } from './examples/form-field-textarea-example/form-field-textarea-example.component';
import { FormFieldRadioButtonsExampleComponent } from './examples/form-field-radio-buttons-example/form-field-radio-buttons-example.component';
import { FormFieldRangeSliderExampleComponent } from './examples/form-field-range-slider-example/form-field-range-slider-example.component';
import { FormFieldAutocompleteExampleComponent } from './examples/form-field-autocomplete-example/form-field-autocomplete-example.component';
import { FormFieldAutocompleteMultipleExampleComponent } from './examples/form-field-autocomplete-example/form-field-autocomplete-multiple-example.component';
import { FormFieldRepeaterAdvancedExampleComponent } from './examples/form-field-repeater-advanced-example/form-field-repeater-advanced-example.component';
import { FormFieldButtonToggleExampleComponent } from './examples/form-field-button-toggle-example/form-field-button-toggle-example.component';
import { FormContainerExampleComponent } from './examples/form-container-example/form-container-example.component';
import { FormContainerReadonlyExampleComponent } from './examples/form-container-example/form-container-readonly-example.component';
import { FormFieldDateRangePickerExampleComponent } from './examples/form-field-date-range-picker-example/form-field-date-range-picker-example.component';
import { FormFieldDateTimePickerExampleComponent } from './examples/form-field-date-time-picker-example/form-field-date-time-picker-example.component';
import { FormFieldSelectExampleComponent } from './examples/form-field-select-example/form-field-select-example.component';
import { FormFieldFileUploadExampleComponent } from './examples/form-field-file-upload-example/form-field-file-upload-example.component';
import { FormConditionalsExampleComponent } from './examples/form-conditionals-example/form-conditionals-example.component';
import { FormFieldMultiLanguageExampleComponent } from './examples/form-field-multi-language-example/form-field-multi-language-example.component';
import { FormCondtionalValidationExampleComponent } from './examples/form-condtional-validation-example/form-condtional-validation-example.component';
import { FormCondtionalWithExternalFormExampleComponent } from './examples/form-condtional-with-external-form-example/form-condtional-with-external-form-example.component';
import { FormFieldSelectAdvancedExampleComponent } from './examples/form-field-select-example/form-field-select-advanced-example.component';

const examples = [
  FormFieldRepeaterExampleComponent,
  FormFieldRepeaterAdvancedExampleComponent,
  FormFieldRepeaterFixedExampleComponent,
  FormFieldInputsExampleComponent,
  FormFieldTextareaExampleComponent,
  FormFieldRadioButtonsExampleComponent,
  FormFieldRangeSliderExampleComponent,
  FormFieldAutocompleteExampleComponent,
  FormFieldAutocompleteMultipleExampleComponent,
  FormFieldButtonToggleExampleComponent,
  FormContainerExampleComponent,
  FormConditionalsExampleComponent,
  FormContainerReadonlyExampleComponent,
  FormFieldDateRangePickerExampleComponent,
  FormFieldDateTimePickerExampleComponent,
  FormFieldSelectExampleComponent,
  FormFieldFileUploadExampleComponent,
  FormFieldMultiLanguageExampleComponent,
  FormCondtionalValidationExampleComponent,
  FormCondtionalWithExternalFormExampleComponent,
  FormFieldSelectAdvancedExampleComponent,
];

@NgModule({
  declarations: examples,
  imports: [CommonModule, SharedModule, ShowcaseFormsRoutingModule],
})
export class ShowcaseFormsModule {}
