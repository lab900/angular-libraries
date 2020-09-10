import { Schema } from './schema';
import { Item } from './page';

export interface DialogAdminSchemaData<T> {
  schema: Schema;
  data: Item;
  submit: (data: T) => Promise<boolean>;
  get: (id: any, language: string) => Promise<T>;
  create: boolean;
}
