import { EditType } from '@lab900/forms';
import { FieldOptions } from '../../../../forms/src/lib/models/FormField';

export interface SchemaField {
  attribute: string;
  title: string;
  editType: EditType;
  overviewOptions?: OverviewOptions;
  editOptions?: FieldOptions;
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
