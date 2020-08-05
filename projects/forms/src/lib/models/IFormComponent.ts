import { FormGroup } from '@angular/forms';
import { FormField, FieldOptions } from './FormField';
import { Input, Component, HostBinding } from '@angular/core';

export interface IFormComponent<T extends FieldOptions> {
  schema: FormField<T>;
  group: FormGroup;
}

@Component({
  template: '',
})
export abstract class FormComponent<T extends FieldOptions = FieldOptions> implements IFormComponent<T> {
  @HostBinding('class.lab900-form-field')
  private hostClass = true;

  @Input()
  public group: FormGroup;

  @Input()
  public schema: FormField<T>;

  public errorMessage?: string;

  public get valid(): boolean {
    return this.group.get(this.schema.attribute).valid;
  }

  public get required(): boolean {
    return this.group.get(this.schema.attribute).hasError('required');
  }

  public get options(): T {
    return this.schema && this.schema.options;
  }

  public get hide(): boolean {
    return this.schema && this.schema.options && this.schema.options.hide;
  }

  public get hint(): string {
    return this.schema && this.schema.options && this.schema.options.hint;
  }

  public get placeholder(): string {
    return this.schema && this.schema.options && this.schema.options.placeholder;
  }

  public updateErrorMessage(): string | null {
    if (this.valid) {
      this.errorMessage = undefined;
      return;
    }

    const field = this.group.get(this.schema.attribute);

    let message = `Field is invalid.`;
    if (field.hasError('required')) {
      message = `A value is required.`;
    } else if (field.hasError('minlength')) {
      message = `This field should contain at least ${this.schema.options.minLength} characters.`;
    } else if (field.hasError('maxlength')) {
      message = `This field should contain at most ${this.schema.options.maxLength} characters.`;
    } else if (field.hasError('min')) {
      message = `This should be at least ${this.schema.options.min}.`;
    } else if (field.hasError('max')) {
      message = `This should be at most ${this.schema.options.max}.`;
    } else if (field.hasError('pattern')) {
      message = `Please enter a valid ${this.schema.options.patternTitle}.`;
    }

    this.errorMessage = message;
  }
}
