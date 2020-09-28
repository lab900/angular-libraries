import { TooltipPosition } from '@angular/material/tooltip';
import { ThemePalette } from '@angular/material/core';

type propFunction<T, R = string> = (data?: T) => R;
type propFunctionNoData<R = string> = () => R;

export interface TableAction {
  type: 'icon-btn' | 'btn' | 'btn-secondary';
  tooltip?: { value: string; position?: TooltipPosition };
  color?: ThemePalette;
}

export interface TableRowAction<T = any> extends TableAction {
  label: propFunction<T> | string;
  action?: propFunction<T, any>;
  hide?: propFunction<T, boolean>;
  disabled?: propFunction<T, boolean>;
  subActions?: TableRowAction<T>[];
}

export interface TableHeaderAction extends TableAction {
  label: propFunctionNoData | string;
  action?: propFunctionNoData<any>;
  hide?: propFunctionNoData<boolean>;
  disabled?: propFunctionNoData<boolean>;
  subActions?: TableHeaderAction[];
}
