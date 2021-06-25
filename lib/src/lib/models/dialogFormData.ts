import { Lab900FormConfig } from './Lab900FormConfig';

export interface DialogFormData<T> {
  schema: Lab900FormConfig;
  data: T;
  submit: (data: T, originalData: T) => Promise<boolean>;
}
