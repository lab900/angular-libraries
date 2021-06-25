import { Lab900FormField } from './lab900-form-field.type';

export interface Lab900FormConfig {
  title?: string;
  fields: Lab900FormField[];
  readonly?: boolean;
}
