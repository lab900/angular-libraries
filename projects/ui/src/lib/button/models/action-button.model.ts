import { Lab900ButtonType } from './button.model';
import { ThemePalette } from '@angular/material/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { propValue } from '../../utils/utils';

export interface ActionButton<T = any> {
  label: propValue<T>;
  action?: (data?: T, e?: Event) => any;
  type?: propValue<T, 'toggle' | Lab900ButtonType>;
  color?: propValue<T, ThemePalette>;
  disabled?: propValue<T, boolean>;
  selected?: propValue<T, boolean>;
  hide?: propValue<T, boolean>;
  subActions?: ActionButton<T>[];
  tooltip?: { value: string; position?: TooltipPosition };
  suffixIcon?: propValue<T>;
  prefixIcon?: propValue<T>;
}

export interface ToggleActionButton<T = any> extends ActionButton<T> {
  selected?: propValue<T, boolean>;
}
