import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { FileFieldComponent } from './components/form-fields/file-field/file-field.component';
import { InputFieldComponent } from './components/form-fields/input-field/input-field.component';
import { MatFileFieldComponent } from './components/form-fields/mat-file-field/mat-file-field.component';
import { UnknownFieldComponent } from './components/form-fields/unknown-field/unknown-field.component';
import { FormFieldDirective } from './directives/form-field.directive';
import { FormDialogComponent } from './components/form-dialog/form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormDialogDirective } from './directives/form-dialog.directive';
import { DateFieldComponent } from './components/form-fields/date-field/date-field.component';
import { WysiwygFieldComponent } from './components/form-fields/wysiwyg-field/wysiwyg-field.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NumberFieldComponent } from './components/form-fields/number-field/number-field.component';
import { SelectFieldComponent } from './components/form-fields/select-field/select-field.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxFieldComponent } from './components/form-fields/checkbox-field/checkbox-field.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    FormFieldDirective,
    FormDialogDirective,
    UnknownFieldComponent,
    InputFieldComponent,
    NumberFieldComponent,
    SelectFieldComponent,
    FormContainerComponent,
    FormDialogComponent,
    DateFieldComponent,
    WysiwygFieldComponent,
    MatFileFieldComponent,
    FileFieldComponent,
    CheckboxFieldComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    AngularEditorModule,
    HttpClientModule,
    TranslateModule.forChild(),
  ],
  exports: [FormContainerComponent, FormDialogDirective],
})
export class FormsModule {}
