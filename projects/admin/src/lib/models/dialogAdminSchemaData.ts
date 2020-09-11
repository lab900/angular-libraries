import { Schema } from './schema';

export interface DialogAdminSchemaData<T> {
  schema: Schema;
  data: T;
  submit: (data: T) => Promise<boolean>;
  get: (id: any, language: string) => Promise<T>;
  create: boolean;
}
