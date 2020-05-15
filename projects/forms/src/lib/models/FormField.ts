import { EditType } from './editType';

export interface FieldOptions {
  hide?: boolean;
  hint?: string;
  required?: boolean;
}

export interface FormField {
  title: string;
  attribute: string;
  editType: EditType;
  options?: FieldOptions;
}
