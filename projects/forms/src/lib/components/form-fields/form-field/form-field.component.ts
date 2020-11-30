import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormField } from '../../../models/FormField';

@Component({
  selector: 'lab900-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent<T = any> {
  private previousValue: any;

  @Input()
  public hide: boolean;

  @Input()
  public readonly: boolean;

  @Input()
  public inlineEdit: boolean;

  @Input()
  public group: FormGroup;

  @Input()
  public schema: FormField<T>;

  @Input()
  public loading: boolean;

  public get fieldControl(): AbstractControl {
    return this.group.get(this.schema.attribute);
  }

  public cancelInline(): void {
    this.fieldControl.setValue(this.previousValue);
    this.hideInline();
  }

  public saveInline(): void {
    this.hideInline();
  }

  public toggleInline(): void {
    if (this.inlineEdit) {
      this.hideInline();
    } else {
      this.showInline();
    }
  }

  public hideInline(): void {
    this.inlineEdit = false;
  }

  public showInline(): void {
    this.previousValue = this.fieldControl.value;
    this.inlineEdit = true;
  }
}
