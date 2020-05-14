import { EditType } from './editType';

export interface SchemaField {
  attribute: string;
  title: string;
  showInOverview: boolean;  // When true, it will be shown in the table
  editType: EditType;
  displayOptions?: DateDisplayOptions // | CheckboxDisplayOptions | WysiwygDisplayOptions ...
}

export interface DisplayOptions {
  customFormatter?: (data: any) => string
}

export interface DateDisplayOptions extends DisplayOptions {
  pipeFormat?: string      // https://angular.io/api/common/DatePipe
}

