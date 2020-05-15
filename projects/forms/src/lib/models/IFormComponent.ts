import { FormGroup } from '@angular/forms';
import { FormField } from './FormField';

export interface IFormComponent {
  schema: FormField;
  group: FormGroup;
}

export class FormComponent implements IFormComponent {
  group: FormGroup;
  schema: FormField;

  get vaild(): boolean {
    return this.group.get(this.schema.attribute).valid;
  }

  get required(): boolean {
    return this.group.get(this.schema.attribute).hasError('required');
  }
}
