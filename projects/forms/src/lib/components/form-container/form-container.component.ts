import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { defaultValue, EditType } from '../../models/editType';
import { Form } from '../../models/Form';
import { FormField } from '../../models/FormField';
import { Lab900FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'lab900-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent<T> implements OnInit {
  @Input()
  public schema: Form;

  @Input()
  public data: T;

  public form: FormGroup;

  public get valid() {
    return this.form.valid;
  }

  public get value(): T {
    return this.form.value as T;
  }

  public constructor(private fb: Lab900FormBuilderService) {}

  public ngOnInit(): void {
    this.form = this.fb.createFormGroup(this.schema.fields);
    if (this.data) {
      this.form.patchValue(this.data);
    }
  }
}
