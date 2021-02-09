import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { TooltipPosition } from '@angular/material/tooltip';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';
import { readPropValue } from '../../../utils/utils';

@Component({
  selector: 'lab900-action-button',
  templateUrl: './lab900-action-button.component.html',
})
export class Lab900ActionButtonComponent {
  @Input()
  public action: ActionButton;

  @Input()
  public data: any;

  /* Properties only valid for toggle buttons --> ? */
  @Input()
  public selectedAction?: ActionButton;

  @Output()
  public valueChanged = new EventEmitter<any>();

  public get tooltipPosition(): TooltipPosition {
    return this.action?.tooltip?.position ?? 'above';
  }

  public getButtonType(): Lab900ButtonType {
    return this.getType() as Lab900ButtonType;
  }

  public getType(): 'toggle' | Lab900ButtonType {
    return readPropValue(this.action.type, this.data);
  }

  public getColor(): ThemePalette {
    return readPropValue(this.action.color, this.data);
  }

  public getLabel(): string {
    return readPropValue(this.action.label, this.data);
  }

  public getHidden(): boolean {
    return readPropValue(this.action.hide, this.data);
  }

  public getDisabled(): boolean {
    return readPropValue(this.action.disabled, this.data);
  }

  public doAction(e: Event): void {
    e.stopPropagation();
    if (this.action.action) {
      this.action.action(this.data, e);
    }
  }

  public getPrefixIcon(): string {
    return readPropValue(this.action.prefixIcon, this.data);
  }

  public getSuffixIcon(): string {
    return readPropValue(this.action.suffixIcon, this.data);
  }
}
