import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseFormsRoutingModule } from './showcase-forms-routing.module';
import { SharedModule } from '../shared/shared.module';

import { FormFieldRepeaterPageComponent } from './pages/form-field-repeater-page/form-field-repeater-page.component';
import { FormFieldInputPageComponent } from './pages/form-field-input-page/form-field-input-page.component';
import { FormFieldDatepickerPageComponent } from './pages/form-field-datepicker-page/form-field-datepicker-page.component';

import { FormFieldRepeaterExampleComponent } from './examples/form-field-repeater-example/form-field-repeater-example.component';
import { FormFieldRepeaterFixedExampleComponent } from './examples/form-field-repeater-fixed-example/form-field-repeater-fixed-xample.component';

const pages = [
  FormFieldRepeaterPageComponent, 
  FormFieldInputPageComponent,
  FormFieldDatepickerPageComponent,
];

const examples = [
  FormFieldRepeaterExampleComponent,
  FormFieldRepeaterFixedExampleComponent,
];

@NgModule({
  declarations: [...pages, ...examples],
  imports: [CommonModule, SharedModule, ShowcaseFormsRoutingModule],
})
export class ShowcaseFormsModule {}
