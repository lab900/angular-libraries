import { Component, Input } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { TooltipPosition } from '@angular/material/tooltip';

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
