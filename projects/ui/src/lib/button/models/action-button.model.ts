import { Lab900ButtonType } from './button.model';
import { ThemePalette } from '@angular/material/core';
import { TooltipPosition } from '@angular/material/tooltip';

type propValue<T, R = string> = ((data?: T) => R) | R;

export interface ActionButton<T = any> {
  label: propValue<T>;
  action?: (data?: T, e?: Event) => any;
  type?: Lab900ButtonType;
  color?: ThemePalette;
  disabled?: propValue<T, boolean>;
  hide?: propValue<T, boolean>;
  subActions?: ActionButton<T>[];
  tooltip?: { value: string; position?: TooltipPosition };
  suffixIcon?: propValue<T>;
  prefixIcon?: propValue<T>;
}
