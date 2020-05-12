import { EditType } from './editType';

export interface SchemaField {
  attribute: string;
  title: string;
  showInOverview: boolean;  // When true, it will be shown in the table
  editType: EditType;
}
