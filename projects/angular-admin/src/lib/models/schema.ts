import { SchemaField } from './schemaField';

export interface Schema {
  name: string;
  fields: SchemaField[];
}
