import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';

@NgModule({
  declarations: [DialogFormComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [DialogFormComponent],
})
export class ModelDrivenFormsModule {}
