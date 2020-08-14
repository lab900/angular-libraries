import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseRoute } from '../shared/models/showcase-route.model';
import { ShowcaseExample } from '../shared/models/showcase-example.model';
// tslint:disable-next-line:max-line-length
import { FormFieldAutocompleteExampleComponent } from './examples/form-field-autocomplete-example/form-field-autocomplete-example.component';
import { FormFieldRepeaterExampleComponent } from './examples/form-field-repeater-example/form-field-repeater-example.component';
import { FormFieldRepeaterFixedExampleComponent } from './examples/form-field-repeater-fixed-example/form-field-repeater-fixed-xample.component';
import { FormFieldInputsExampleComponent } from './examples/form-field-inputs-example/form-field-inputs-example.component';
import { FormFieldTextareaExampleComponent } from './examples/form-field-textarea-example/form-field-textarea-example.component';
import { FormFieldRadioButtonsExampleComponent } from './examples/form-field-radio-buttons-example/form-field-radio-buttons-example.component';
import { FormFieldRangeSliderExampleComponent } from './examples/form-field-range-slider-example/form-field-range-slider-example.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form-field-repeater',
    pathMatch: 'full',
  },
  new ShowcaseRoute('form-field-autocomplete', 'Form Fields: Autocomplete', [
    new ShowcaseExample(FormFieldAutocompleteExampleComponent, 'Autocomplete', ['TS'], 'form-fields/form-field-autocomplete'),
  ]),
  new ShowcaseRoute('form-field-repeater', 'Form Fields: Repeater', [
    new ShowcaseExample(FormFieldRepeaterExampleComponent, 'Repeater', ['TS'], 'form-fields/form-field-repeater-editable'),
    new ShowcaseExample(FormFieldRepeaterFixedExampleComponent, 'Repeater fixed', ['TS'], 'form-fields/form-field-repeater-fixed'),
  ]),
  new ShowcaseRoute('form-field-datepicker', 'Form Fields: Datepicker', []),
  new ShowcaseRoute('form-field-input', 'Form Fields: Input & Textarea', [
    new ShowcaseExample(FormFieldInputsExampleComponent, 'Input', ['TS'], 'form-fields/form-field-inputs'),
    new ShowcaseExample(FormFieldTextareaExampleComponent, 'Textarea', ['TS'], 'form-fields/form-field-textarea'),
  ]),
  new ShowcaseRoute('form-field-container', 'Form container', []),
  new ShowcaseRoute('form-field-radio-buttons', 'Form Fields: Radio buttons', [
    new ShowcaseExample(FormFieldRadioButtonsExampleComponent, 'Radio buttons', ['TS'], 'form-fields/form-field-radio-buttons'),
  ]),
  new ShowcaseRoute('form-field-range-slider', 'Form Fields: Range slider', [
    new ShowcaseExample(FormFieldRangeSliderExampleComponent, 'Range slider', ['TS'], 'form-fields/form-field-range-slider'),
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseFormsRoutingModule {}
