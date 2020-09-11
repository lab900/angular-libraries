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
  static toForm(schema: Schema, create = false): Form {
    const form: Form = new Form();
    form.fields = [];
    schema.fields
      .filter((field) => field.translatable)
      .forEach((schemaField) => {
        form.fields.push({
          title: schemaField.title,
          editType: schemaField.editType,
          attribute: schemaField.attribute,
          options: create && schemaField.createOptions ? schemaField.createOptions : schemaField.editOptions,
        });
      });
    schema.fields
      .filter((field) => !field.translatable)
      .forEach((schemaField) => {
        form.fields.push({
          title: schemaField.title,
          editType: schemaField.editType,
          attribute: schemaField.attribute,
          options: create && schemaField.createOptions ? schemaField.createOptions : schemaField.editOptions,
        });
      });
    return form;
  }
}
