import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { InputFieldComponent } from './components/form-fields/input-field/input-field.component';
import { UnknownFieldComponent } from './components/form-fields/unknown-field/unknown-field.component';
import { FormFieldDirective } from './directives/form-field.directive';
import { FormDialogComponent } from './components/dialogs/form-dialog/form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormDialogDirective } from './directives/form-dialog.directive';
import { ConfirmationDialogDirective } from './directives/confirmation-dialog.directive';

@NgModule({
  declarations: [
    FormFieldDirective,
    FormDialogDirective,
    ConfirmationDialogDirective,
    UnknownFieldComponent,
    InputFieldComponent,
    FormContainerComponent,
    FormDialogComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
  ],
  exports: [FormContainerComponent, FormDialogDirective, ConfirmationDialogDirective],
})
export class FormsModule {}
