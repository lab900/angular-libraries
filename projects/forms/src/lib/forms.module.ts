import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { InputFieldComponent } from './components/form-fields/input-field/input-field.component';
import { UnknownFieldComponent } from './components/form-fields/unknown-field/unknown-field.component';
import { FormFieldDirective } from './directives/form-field.directive';
import { FormDialogComponent } from './components/dialogs/form-dialog/form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormDialogDirective } from './directives/form-dialog.directive';
import { ConfirmationDialogDirective } from './directives/confirmation-dialog.directive';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { DateFieldComponent } from './components/form-fields/date-field/date-field.component';
import { WysiwygFieldComponent } from './components/form-fields/wysiwyg-field/wysiwyg-field.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    FormFieldDirective,
    FormDialogDirective,
    ConfirmationDialogDirective,
    UnknownFieldComponent,
    InputFieldComponent,
    FormContainerComponent,
    FormDialogComponent,
    ConfirmationDialogComponent,
    AlertDialogComponent,
    DateFieldComponent,
    WysiwygFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularEditorModule,
    HttpClientModule,
  ],
  exports: [FormContainerComponent, FormDialogDirective, ConfirmationDialogDirective],
})
export class FormsModule {}
