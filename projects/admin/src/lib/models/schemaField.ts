import { EditType, FieldOptions, SelectFieldOptions, WysiwygFieldOptions } from '@lab900/forms';

export interface SchemaField {
  attribute: string;
  title: string;
  editType: EditType;
  overviewOptions?: OverviewOptions;
  editOptions?: FieldOptions | WysiwygFieldOptions | SelectFieldOptions;
  createOptions?: FieldOptions | WysiwygFieldOptions | SelectFieldOptions;
}

export interface OverviewOptions {
  hide?: boolean;
  sticky?: boolean;
  onClick?: (column: SchemaField, value: any, row: any) => void;
  displayOptions?: DateDisplayOptions; // | CheckboxDisplayOptions | WysiwygDisplayOptions ...
}
export interface DisplayOptions {
  maxColumnWidth?: string;
  customFormatter?: (cellValue: any, row: any) => string;
}

export interface DateDisplayOptions extends DisplayOptions {
  pipeFormat?: string; // https://angular.io/api/common/DatePipe
}
