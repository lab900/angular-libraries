import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';
import { InputFieldComponent } from './components/form-fields/input-field/input-field.component';
import { UnknownFieldComponent } from './components/form-fields/unknown-field/unknown-field.component';
import { FormFieldDirective } from './directives/form-field.directive';

@NgModule({
  declarations: [DialogFormComponent, FormFieldDirective, UnknownFieldComponent, InputFieldComponent],
  imports: [BrowserModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule],
  exports: [DialogFormComponent],
})
export class ModelDrivenFormsModule {}
