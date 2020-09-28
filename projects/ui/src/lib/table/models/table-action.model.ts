import { TooltipPosition } from '@angular/material/tooltip';

type propFunction<T, R = string> = (data?: T) => R;
type propFunctionNoData<R = string> = () => R;

export interface TableAction {
  type: 'icon-btn' | 'btn';
  tooltip?: { value: string; position?: TooltipPosition };
}

export interface TableRowAction<T = any> extends TableAction {
  label: propFunction<T> | string;
  action: propFunction<T, any>;
  type: 'icon-btn' | 'btn';
  hide?: propFunction<T, boolean>;
  disabled?: propFunction<T, boolean>;
  subActions?: TableRowAction<T>[];
}

export interface TableHeaderAction extends TableAction {
  label: propFunctionNoData | string;
  action: propFunctionNoData<any>;
  hide?: propFunctionNoData<boolean>;
  disabled?: propFunctionNoData<boolean>;
  subActions?: TableHeaderAction[];
}
