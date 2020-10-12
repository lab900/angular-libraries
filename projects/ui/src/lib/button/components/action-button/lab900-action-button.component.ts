import { Component, Input } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { TooltipPosition } from '@angular/material/tooltip';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';

@Component({
  selector: 'lab900-action-button',
  templateUrl: './lab900-action-button.component.html',
})
export class Lab900ActionButtonComponent {
  @Input()
  public action: ActionButton;

  @Input()
  public data: any;

  public get tooltipPosition(): TooltipPosition {
    return this.action?.tooltip?.position ?? 'above';
  }

  public getType(): Lab900ButtonType {
    if (typeof this.action.type === 'function') {
      return this.action.type(this.data);
    }
    return this.action.type;
  }

  public getColor(): ThemePalette {
    if (typeof this.action.color === 'function') {
      return this.action.color(this.data);
    }
    return this.action.color;
  }

  public getLabel(): string {
    if (typeof this.action.label === 'function') {
      return this.action.label(this.data);
    }
    return this.action.label;
  }

  public getDisabled(): boolean {
    if (typeof this.action.disabled === 'function') {
      return this.action.disabled(this.data);
    }
    return this.action.disabled;
  }

  public doAction(e: Event): void {
    if (this.action.action) {
      this.action.action(this.data, e);
    }
  }

  public getPrefixIcon(): string {
    if (typeof this.action.prefixIcon === 'function') {
      return this.action.prefixIcon(this.data);
    }
    return this.action.prefixIcon;
  }

  public getSuffixIcon(): string {
    if (typeof this.action.suffixIcon === 'function') {
      return this.action.suffixIcon(this.data);
    }
    return this.action.suffixIcon;
  }
}
