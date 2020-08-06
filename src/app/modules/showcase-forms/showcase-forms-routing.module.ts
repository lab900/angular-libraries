import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFieldRepeaterPageComponent } from './pages/form-field-repeater-page/form-field-repeater-page.component';
import { FormFieldDatepickerPageComponent } from './pages/form-field-datepicker-page/form-field-datepicker-page.component';
import { FormFieldInputPageComponent } from './pages/form-field-input-page/form-field-input-page.component';
import { FormContainerPageComponent } from './pages/form-container-page/form-container-page.component';
import { FormFieldRadioButtonsPageComponent } from './pages/form-field-radio-buttons-page/form-field-radio-buttons-page.component';
import { FormFieldRangeSliderPageComponent } from './pages/form-field-range-slider-page/form-field-range-slider-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form-field-repeater',
    pathMatch: 'full',
  },
  {
    path: 'form-field-repeater',
    component: FormFieldRepeaterPageComponent,
    data: { pageTitle: 'Form Fields: Repeater' },
  },
  {
    path: 'form-field-datepicker',
    component: FormFieldDatepickerPageComponent,
    data: { pageTitle: 'Form Fields: Datepicker' },
  },
  {
    path: 'form-field-input',
    component: FormFieldInputPageComponent,
    data: { pageTitle: 'Form Fields: Input & textarea' },
  },
  {
    path: 'form-container',
    component: FormContainerPageComponent,
    data: { pageTitle: 'Form container' },
  },
  {
    path: 'form-field-radio-buttons',
    component: FormFieldRadioButtonsPageComponent,
    data: { pageTitle: 'Form Fields: Radio buttons' },
  },
  {
    path: 'form-field-range-slider',
    component: FormFieldRangeSliderPageComponent,
    data: { pageTitle: 'Form Fields: Range slider' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseFormsRoutingModule {}
