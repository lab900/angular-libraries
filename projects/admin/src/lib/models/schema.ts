import { SchemaField } from './schemaField';
import { Form } from '@lab900/forms';

export interface Schema {
  name: string;
  fields: SchemaField[];
}

/* Converts an admin schema into a form configuration */
export class SchemaConverter {
  static toForm(schema: Schema): Form {
    const form: Form = new Form();
    form.fields = schema.fields.map((schemaField) => {
      return {
        title: schemaField.title,
        editType: schemaField.editType,
        attribute: schemaField.attribute,
        options: schemaField.editOptions,
      };
    });
    return form;
  }
}
