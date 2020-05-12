import { SchemaField } from './schemaField';
import { CrudService } from './crudService';

export interface Schema {
  name: string;
  fields: SchemaField[];
  crudService: CrudService;
}
