import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Form } from '../../models/Form';
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
