import { SchemaField } from './schemaField';
import { Form } from '@lab900/forms';

export interface Schema {
  name: string;
  creatable: boolean;
  editable: boolean;
  deletable: boolean;
  fields: SchemaField[];
}

/* Converts an admin schema into a form configuration */
export class SchemaConverter {
  static toForm(schema: Schema, create = false): Form {
    const form: Form = new Form();
    form.fields = schema.fields.map((schemaField) => {
      return {
        title: schemaField.title,
        editType: schemaField.editType,
        attribute: schemaField.attribute,
        options: create && schemaField.createOptions ? schemaField.createOptions : schemaField.editOptions,
      };
    });
    return form;
  }
}
