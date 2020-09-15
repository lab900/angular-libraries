import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Form } from '../../models/Form';
import { Lab900FormBuilderService } from '../../services/form-builder.service';
import { FormField } from '../../models/FormField';

@Component({
  selector: 'lab900-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent<T> implements OnChanges {
  @Input()
  public schema: Form;

  @Input()
  public data: T;

  public form: FormGroup;

  public get valid(): boolean {
    return this.form.valid;
  }

  public get value(): T {
    return this.form.value as T;
  }

  public constructor(private fb: Lab900FormBuilderService) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.schema) {
      this.form = this.fb.createFormGroup(this.schema.fields, null, this.data);
    }
    if (changes.data && this.data) {
      setTimeout(() => this.patchValues(this.data), 0);
    }
  }

  public patchValues(data: T): void {
    Object.keys(data).forEach((key: string) => {
      const control = this.form.controls[key];
      if (control) {
        if (control instanceof FormArray) {
          const fieldSchema = this.schema.fields.find((field: FormField) => field.attribute === key);
          if (data[key] && fieldSchema) {
            this.fb.createFormArray(data, fieldSchema, control);
          }
        }
        control.patchValue(data[key]);
      }
    });
  }

  public touchAllFormFields(): void {
    this.validateAllFormFields(this.form);
  }

  public validateAllFormFields(formGroup: FormGroup) {
    Object.keys(this.form.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
