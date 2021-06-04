import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CheckboxFieldComponent } from '../components/form-fields/checkbox-field/checkbox-field.component';
import { DateFieldComponent } from '../components/form-fields/date-field/date-field.component';
import { FileFieldComponent } from '../components/form-fields/file-field/file-field.component';
import { InputFieldComponent } from '../components/form-fields/input-field/input-field.component';
import { TextareaFieldComponent } from '../components/form-fields/textarea-field/textarea-field.component';
import { SelectFieldComponent } from '../components/form-fields/select-field/select-field.component';
import { UnknownFieldComponent } from '../components/form-fields/unknown-field/unknown-field.component';
import { WysiwygFieldComponent } from '../components/form-fields/wysiwyg-field/wysiwyg-field.component';
import { EditType } from '../models/editType';
import { FieldOptions, FormField, ValueLabel } from '../models/FormField';
import { FormComponent, IFormComponent } from '../models/IFormComponent';
import { FormRowComponent } from '../components/form-row/form-row.component';
import { RepeaterFieldComponent } from '../components/form-fields/repeater-field/repeater-field.component';
import { RadioButtonsFieldComponent } from '../components/form-fields/radio-buttons-field/radio-buttons-field.component';
import { RangeSliderFieldComponent } from '../components/form-fields/range-slider-field/range-slider-field.component';
import { AutocompleteFieldComponent } from '../components/form-fields/autocomplete-field/autocomplete-field.component';
import { IconFieldComponent } from '../components/form-fields/icon-field/icon-field.component';
import { ButtonToggleFieldComponent } from '../components/form-fields/button-toggle-field/button-toggle-field.component';
import { AutocompleteMultipleFieldComponent } from '../components/form-fields/autocomplete-multiple-field/autocomplete-multiple-field.component';
import { ReadonlyFieldComponent } from '../components/form-fields/readonly-field/readonly-field.component';
import { DateRangeFieldComponent } from '../components/form-fields/date-range-field/date-range-field.component';
import { DateTimeFieldComponent } from '../components/form-fields/date-time-field/date-time-field.component';
import { FilePreviewFieldComponent } from '../components/form-fields/file-preview-field/file-preview-field.component';
import { MultiLangInputFieldComponent } from '../components/form-fields/multi-lang-input/multi-lang-input-field.component';

const mapToComponent = (field: FormField): Type<FormComponent> => {
  switch (field.editType) {
    case EditType.Input:
    case EditType.Image:
      return InputFieldComponent;
    case EditType.Checkbox:
      return CheckboxFieldComponent;
    case EditType.Wysiwyg:
      return WysiwygFieldComponent;
    case EditType.Date:
      return DateFieldComponent;
    case EditType.File:
      return FileFieldComponent;
    case EditType.FilePreview:
      return FilePreviewFieldComponent;
    case EditType.Select:
      return SelectFieldComponent;
    case EditType.TextArea:
      return TextareaFieldComponent;
    case EditType.Repeater:
      return RepeaterFieldComponent;
    case EditType.RadioButtons:
      return RadioButtonsFieldComponent;
    case EditType.Row:
      return FormRowComponent;
    case EditType.RangeSlider:
      return RangeSliderFieldComponent;
    case EditType.Autocomplete:
      return AutocompleteFieldComponent;
    case EditType.AutocompleteMultiple:
      return AutocompleteMultipleFieldComponent;
    case EditType.Icon:
      return IconFieldComponent;
    case EditType.ButtonToggle:
      return ButtonToggleFieldComponent;
    case EditType.DateRange:
      return DateRangeFieldComponent;
    case EditType.DateTime:
      return DateTimeFieldComponent;
    case EditType.MultiLangInput:
      return MultiLangInputFieldComponent;
    default:
      return UnknownFieldComponent;
  }
};

@Directive({
  selector: '[lab900FormField]',
})
export class FormFieldDirective implements IFormComponent<FieldOptions>, OnChanges, OnInit, OnDestroy {
  @Input()
  public schema: FormField;

  @Input()
  public group: FormGroup;

  @Input()
  public language?: string;

  @Input()
  public availableLanguages?: ValueLabel[];

  @Input()
  public readonly = false;

  public component: ComponentRef<FormComponent>;

  public statusChangeSubscription: Subscription;

  public constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.component && changes.readonly) {
      const { previousValue } = changes.readonly;
      const hadPrevious = previousValue !== null && typeof previousValue !== 'undefined';
      if (hadPrevious && changes.readonly?.previousValue !== this.readonly) {
        this.createComponent();
      } else {
        this.setComponentProps();
      }
    }
  }

  public ngOnInit(): void {
    this.validateType();
    this.createComponent();
  }

  public ngOnDestroy(): void {
    if (this.statusChangeSubscription) {
      this.statusChangeSubscription.unsubscribe();
    }
  }

  private createComponent(): void {
    this.container.clear();
    const c =
      this.readonly && ![EditType.Row, EditType.Select, EditType.FilePreview].includes(this.schema.editType)
        ? ReadonlyFieldComponent
        : mapToComponent(this.schema);
    const component = this.resolver.resolveComponentFactory<FormComponent<FieldOptions>>(c);
    this.component = this.container.createComponent(component);
    this.setComponentProps();
  }

  private setComponentProps(): void {
    this.component.instance.schema = this.schema;
    this.component.instance.group = this.group;
    this.component.instance.readonly = this.readonly;
    this.component.instance.availableLanguages = this.availableLanguages;
    this.component.instance.language = this.language;
  }

  private validateType(): void {
    if (!mapToComponent(this.schema)) {
      const supportedTypes = Object.keys(EditType).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.schema.editType}).
        Supported types: ${supportedTypes}`,
      );
    }
  }
}
