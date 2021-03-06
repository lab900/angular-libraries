import { SchemaField } from './schemaField';
import { Form } from '@lab900/forms';

export interface Schema {
  name: string;
  creatable: boolean;
  editable: boolean;
  deletable: boolean;
  fields: SchemaField[];
  languages?: Map<string, string>;
}

/* Converts an admin schema into a form configuration */
export class SchemaConverter {
  public static toForm(schema: Schema, create = false): Form {
    const form: Form = new Form();
    form.fields = [];
    schema.fields
      .sort((fieldA, fieldB) => (fieldA.translatable === fieldB.translatable ? 0 : fieldA.translatable ? -1 : 1))
      .forEach((schemaField) => {
        form.fields.push({
          ...schemaField,
          options: create && schemaField.createOptions ? schemaField.createOptions : schemaField.editOptions,
        });
      });
    return form;
  }
}
