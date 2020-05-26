import { EditType, FieldOptions, WysiwygFieldOptions } from '@lab900/forms';

export interface SchemaField {
  attribute: string;
  title: string;
  editType: EditType;
  overviewOptions?: OverviewOptions;
  editOptions?: FieldOptions | WysiwygFieldOptions;
}

export interface OverviewOptions {
  show?: boolean;
  sticky?: boolean;
  displayOptions?: DateDisplayOptions; // | CheckboxDisplayOptions | WysiwygDisplayOptions ...
}
export interface DisplayOptions {
  maxColumnWidth?: string;
  customFormatter?: (data: any) => string;
}

export interface DateDisplayOptions extends DisplayOptions {
  pipeFormat?: string; // https://angular.io/api/common/DatePipe
}
