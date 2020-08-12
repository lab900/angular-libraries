import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '../../models/Form';
import { Lab900FormBuilderService } from '../../services/form-builder.service';

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

  public get valid() {
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
      setTimeout(() => this.form.patchValue(this.data), 0);
    }
  }
}
