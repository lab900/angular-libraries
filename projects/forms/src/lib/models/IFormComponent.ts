import { FormGroup } from '@angular/forms';
import { FormField, FieldOptions } from './FormField';
import { Input, Injectable } from '@angular/core';

export interface IFormComponent<T extends FieldOptions> {
  schema: FormField<T>;
  group: FormGroup;
}

@Injectable()
export abstract class FormComponent<T extends FieldOptions = FieldOptions> implements IFormComponent<T> {
  @Input()
  public group: FormGroup;

  @Input()
  public schema: FormField<T>;

  @Input()
  public readonly = false;

  public get valid(): boolean {
    return this.group.get(this.schema.attribute).valid;
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

  public getErrorMessage(): string {
    const field = this.group.get(this.schema.attribute);
    let message = `Field is invalid.`;
    Object.keys(field.errors).forEach((key: string) => {
      if (field.hasError(key)) {
        if (this.schema.errorMessages && Object.keys(this.schema.errorMessages).includes(key)) {
          message = this.schema.errorMessages[key];
        } else {
          message = this.getDefaultErrorMessage(key);
        }
      }
    });
    return message;
  }

  private getDefaultErrorMessage(key: string): string {
    switch (key) {
      case 'required':
        return `A value is required.`;
      case 'minlength':
        return `This field should contain at least ${this.options.minLength} characters.`;
      case 'maxlength':
        return `This field should contain at most ${this.options.maxLength} characters.`;
      case 'min':
        return `This should be at least ${this.options.min}.`;
      case 'max':
        return `This should be at most ${this.options.max}.`;
      case 'pattern':
        return `Please enter a valid ${this.options.patternTitle}.`;
      default:
        return `Field is invalid.`;
    }
  }
}
