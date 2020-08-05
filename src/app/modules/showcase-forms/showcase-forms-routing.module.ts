import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormFieldRepeaterPageComponent } from './pages/form-field-repeater-page/form-field-repeater-page.component';
import { FormFieldDatepickerPageComponent } from './pages/form-field-datepicker-page/form-field-datepicker-page.component';
import { FormFieldInputPageComponent } from './pages/form-field-input-page/form-field-input-page.component';

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
    data: { pageTitle: 'Form Fields: Input & Textarea' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseFormsRoutingModule {}
