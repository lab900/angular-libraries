import { FormField } from './FormField';

export class Form {
  public title?: string;
  public fields: FormField[];
  public readonly?: boolean;
}
