import { FormGroup } from '@angular/forms';
import { FormField } from './FormField';
import { EditType } from './editType';

export interface IFormComponent {
  schema: FormField;
  group: FormGroup;
}

export class FormComponent implements IFormComponent {
  group: FormGroup;
  schema: FormField;

  get valid(): boolean {
    return this.group.get(this.schema.attribute).valid;
  }

  get required(): boolean {
    return this.group.get(this.schema.attribute).hasError('required');
  }

  get errorMessage(): string | null {
    if (this.valid) {
      return null;
    }

    const field = this.group.get(this.schema.attribute);

    if (field.hasError('required')) {
      if (this.schema.editType === EditType.Number) {
        // When there's text in a [type=number] field, its value is ""
        return `A valid number is required.`;
      } else {
        return `A value is required.`;
      }
    } else if (field.hasError('minlength')) {
      return `This field should contain at least ${this.schema.options.minLength} characters.`;
    } else if (field.hasError('maxlength')) {
      return `This field should contain at most ${this.schema.options.maxLength} characters.`;
    } else if (field.hasError('min')) {
      return `This should be at least ${this.schema.options.min}.`;
    } else if (field.hasError('max')) {
      return `This should be at most ${this.schema.options.max}.`;
    } else if (field.hasError('pattern')) {
      return `Please enter a valid ${this.schema.options.patternTitle}.`;
    } else {
      return `Field is invalid.`;
    }
  }
}
