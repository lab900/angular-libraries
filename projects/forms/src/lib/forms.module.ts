import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
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
import { SelectFieldComponent } from './components/form-fields/select-field/select-field.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxFieldComponent } from './components/form-fields/checkbox-field/checkbox-field.component';
import { defaultFormModuleSettings, FormModuleSettings } from './models/FormModuleSettings';
import { TextareaFieldComponent } from './components/form-fields/textarea-field/textarea-field.component';
import { FormRowComponent } from './components/form-row/form-row.component';
import { RepeaterFieldComponent } from './components/form-fields/repeater-field/repeater-field.component';
import { Lab900FormBuilderService } from './services/form-builder.service';
import { RadioButtonsFieldComponent } from './components/form-fields/radio-buttons-field/radio-buttons-field.component';
import { RangeSliderFieldComponent } from './components/form-fields/range-slider-field/range-slider-field.component';
import { MatRangeSliderFieldComponent } from './components/form-fields/range-slider-field/mat-range-slider-field/mat-range-slider-field.component';
import { AutocompleteFieldComponent } from './components/form-fields/autocomplete-field/autocomplete-field.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { IconFieldComponent } from './components/form-fields/icon-field/icon-field.component';
import { ButtonToggleFieldComponent } from './components/form-fields/button-toggle-field/button-toggle-field.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { IconComponent } from './components/icon/icon.component';
import { AutocompleteMultipleFieldComponent } from './components/form-fields/autocomplete-multiple-field/autocomplete-multiple-field.component';
import { MatChipsModule } from '@angular/material/chips';
import { NgxMaskModule } from 'ngx-mask';
import { ReadonlyFieldComponent } from './components/form-fields/readonly-field/readonly-field.component';
import { DateRangeFieldComponent } from './components/form-fields/date-range-field/date-range-field.component';
import { NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { DateTimeFieldComponent } from './components/form-fields/date-time-field/date-time-field.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilePreviewFieldComponent } from './components/form-fields/file-preview-field/file-preview-field.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ImagePreviewModalComponent } from './components/image-preview-modal/image-preview-modal.component';
import { AuthImagePipe } from './auth-image.pipe';

const customFields = [
  UnknownFieldComponent,
  InputFieldComponent,
  SelectFieldComponent,
  FileFieldComponent,
  CheckboxFieldComponent,
  DateFieldComponent,
  WysiwygFieldComponent,
  TextareaFieldComponent,
  RepeaterFieldComponent,
  FormRowComponent,
  RadioButtonsFieldComponent,
  RangeSliderFieldComponent,
  AutocompleteFieldComponent,
  AutocompleteMultipleFieldComponent,
  IconFieldComponent,
  ButtonToggleFieldComponent,
  ReadonlyFieldComponent,
  DateRangeFieldComponent,
  DateTimeFieldComponent,
];

@NgModule({
  declarations: [
    FormFieldDirective,
    FormDialogDirective,
    FormContainerComponent,
    FormDialogComponent,
    MatFileFieldComponent,
    MatRangeSliderFieldComponent,
    ...customFields,
    IconComponent,
    FilePreviewFieldComponent,
    ImagePreviewModalComponent,
    AuthImagePipe,
    AuthImagePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    AngularEditorModule,
    HttpClientModule,
    TranslateModule,
    MatButtonToggleModule,
    MatChipsModule,
    NgxMaskModule.forRoot(),
    NgxMatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  exports: [FormContainerComponent, FormDialogDirective],
})
export class Lab900FormsModule {
  public static forRoot(settings: FormModuleSettings = defaultFormModuleSettings): ModuleWithProviders<FormsModule> {
    return {
      ngModule: Lab900FormsModule,
      providers: [
        Lab900FormBuilderService,
        {
          provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
          useValue: settings.formField,
        },
        AuthImagePipe,
      ],
    };
  }
}
