import { TooltipPosition } from '@angular/material/tooltip';

type propFunction<T> = (data: T) => string;

export interface TableAction<T = any> {
  label: propFunction<T> | string;
  action: (data?: T) => any;
  type: 'icon-btn' | 'btn';
  hide?: (data: T) => boolean;
  subActions?: TableAction<T>[];
  tooltip?: { value: string; position?: TooltipPosition };
}
