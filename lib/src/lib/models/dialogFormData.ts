import { Form } from './Form';
import { FormGroup } from '@angular/forms';

export interface DialogFormData<T> {
  schema: Form;
  data: T;
  submit: (data: T, originalData: T) => Promise<boolean>;
}
