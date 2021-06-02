import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseRoute } from '../shared/models/showcase-route.model';
import { ShowcaseExample } from '../shared/models/showcase-example.model';
// tslint:disable-next-line:max-line-length
import { FormFieldAutocompleteExampleComponent } from './examples/form-field-autocomplete-example/form-field-autocomplete-example.component';
import { FormFieldRepeaterExampleComponent } from './examples/form-field-repeater-example/form-field-repeater-example.component';
import { FormFieldRepeaterFixedExampleComponent } from './examples/form-field-repeater-fixed-example/form-field-repeater-fixed-example.component';
import { FormFieldInputsExampleComponent } from './examples/form-field-inputs-example/form-field-inputs-example.component';
import { FormFieldTextareaExampleComponent } from './examples/form-field-textarea-example/form-field-textarea-example.component';
import { FormFieldRadioButtonsExampleComponent } from './examples/form-field-radio-buttons-example/form-field-radio-buttons-example.component';
import { FormFieldRangeSliderExampleComponent } from './examples/form-field-range-slider-example/form-field-range-slider-example.component';
import { FormFieldRepeaterAdvancedExampleComponent } from './examples/form-field-repeater-advanced-example/form-field-repeater-advanced-example.component';
import { FormFieldButtonToggleExampleComponent } from './examples/form-field-button-toggle-example/form-field-button-toggle-example.component';
import { FormContainerExampleComponent } from './examples/form-container-example/form-container-example.component';
import { FormContainerReadonlyExampleComponent } from './examples/form-container-example/form-container-readonly-example.component';
import { FormFieldAutocompleteMultipleExampleComponent } from './examples/form-field-autocomplete-example/form-field-autocomplete-multiple-example.component';
import { FormFieldDateRangePickerExampleComponent } from './examples/form-field-date-range-picker-example/form-field-date-range-picker-example.component';
import { FormFieldDateTimePickerExampleComponent } from './examples/form-field-date-time-picker-example/form-field-date-time-picker-example.component';
import { showcaseFormsConfig } from './showcase-forms.constants';
import { ShowcaseHomeComponent } from '../shared/components/showcase-home/showcase-home.component';
import { showcaseFormsNavItems } from './showcase-forms.nav-items';
import { MarkdownPageComponent } from '../shared/components/markdown-page/markdown-page.component';
import { FormFieldSelectExampleComponent } from './examples/form-field-select-example/form-field-select-example.component';
import { FormFieldFileUploadExampleComponent } from './examples/form-field-file-upload-example/form-field-file-upload-example.component';
import { FormConditionalsExampleComponent } from './examples/form-conditionals-example/form-conditionals-example.component';
import { FormFieldMultiLanguageExampleComponent } from './examples/form-field-multi-language-example/form-field-multi-language-example.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseHomeComponent,
    data: { config: showcaseFormsConfig, nav: showcaseFormsNavItems },
  },
  {
    path: 'getting-started',
    component: MarkdownPageComponent,
    data: { filePath: 'guides/forms/getting-started.md' },
  },
  new ShowcaseRoute(
    'form-container',
    'Dynamic forms',
    [
      new ShowcaseExample(FormContainerExampleComponent, 'Form Container'),
      new ShowcaseExample(FormContainerReadonlyExampleComponent, 'Form Container Readonly', 'form-container-example'),
    ],
    'guides/forms/creating-forms.md',
  ),
  new ShowcaseRoute(
    'conditional-forms',
    'Conditional forms',
    [new ShowcaseExample(FormConditionalsExampleComponent, 'Conditional Form Container')],
    'guides/forms/TODO.md',
  ),
  new ShowcaseRoute('form-field-autocomplete', 'Form Fields: Autocomplete', [
    new ShowcaseExample(FormFieldAutocompleteExampleComponent, 'Autocomplete'),
    new ShowcaseExample(FormFieldAutocompleteMultipleExampleComponent, 'Autocomplete Multiple', 'form-field-autocomplete-example'),
  ]),
  new ShowcaseRoute('form-field-repeater', 'Form Fields: Repeater', [
    new ShowcaseExample(FormFieldRepeaterAdvancedExampleComponent, 'Repeater (nested)'),
    new ShowcaseExample(FormFieldRepeaterExampleComponent, 'Repeater'),
    new ShowcaseExample(FormFieldRepeaterFixedExampleComponent, 'Repeater fixed'),
  ]),
  new ShowcaseRoute('form-field-datepicker', 'Form Fields: Datepicker', [
    new ShowcaseExample(FormFieldDateRangePickerExampleComponent, 'Date range picker'),
    new ShowcaseExample(FormFieldDateTimePickerExampleComponent, 'Date time picker'),
  ]),
  new ShowcaseRoute('form-field-input', 'Form Fields: Input & Textarea', [
    new ShowcaseExample(FormFieldInputsExampleComponent, 'Input'),
    new ShowcaseExample(FormFieldTextareaExampleComponent, 'Textarea'),
  ]),
  new ShowcaseRoute('form-field-radio-buttons', 'Form Fields: Radio buttons', [
    new ShowcaseExample(FormFieldRadioButtonsExampleComponent, 'Radio buttons'),
  ]),
  new ShowcaseRoute('form-field-button-toggle', 'Form Fields: Button Toggle', [
    new ShowcaseExample(FormFieldButtonToggleExampleComponent, 'Button Toggle'),
  ]),
  new ShowcaseRoute('form-field-range-slider', 'Form Fields: Range slider', [
    new ShowcaseExample(FormFieldRangeSliderExampleComponent, 'Range slider'),
  ]),
  new ShowcaseRoute('form-field-select', 'Form Fields: Select', [new ShowcaseExample(FormFieldSelectExampleComponent, 'Selects')]),
  new ShowcaseRoute('form-field-file-upload', 'Form Fields: File upload', [
    new ShowcaseExample(FormFieldFileUploadExampleComponent, 'Upload'),
  ]),
  new ShowcaseRoute('form-field-multi-lang', 'Form Fields: Multi language', [
    new ShowcaseExample(FormFieldMultiLanguageExampleComponent, 'Multi language'),
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseFormsRoutingModule {}
