import { FormGroup } from '@angular/forms';
import { EditType } from './editType';
import { FormField } from './FormField';

export interface IFormComponent {
  schema: FormField;
  group: FormGroup;
}

export class FormComponent implements IFormComponent {
  group: FormGroup;
  schema: FormField;

  errorMessage: string | null = null;

  get valid(): boolean {
    return this.group.get(this.schema.attribute).valid;
  }

  get required(): boolean {
    return this.group.get(this.schema.attribute).hasError('required');
  }

  updateErrorMessage(): string | null {
    console.log('updateErrorMessage()');
    if (this.valid) {
      this.errorMessage = null;
      return;
    }

    const field = this.group.get(this.schema.attribute);

    let message = `Field is invalid.`;
    if (field.hasError('required')) {
      if (this.schema.editType === EditType.Number) {
        // When there's text in a [type=number] field, its value is ""
        message = `A valid number is required.`;
      } else {
        message = `A value is required.`;
      }
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
