import { Form } from './Form';

export interface DialogFormData<T> {
  schema: Form;
  data: T;
  submit: (data: T, originalData: T) => Promise<boolean>;
}
