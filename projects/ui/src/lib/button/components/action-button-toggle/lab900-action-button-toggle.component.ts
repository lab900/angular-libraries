import { Component, Input } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { ThemePalette } from '@angular/material/core';
import { readPropValue } from '../../../utils/utils';

@Component({
  selector: 'lab900-action-button-toggle',
  templateUrl: './lab900-action-button-toggle.component.html',
})
export class Lab900ActionButtonToggleComponent {
  @Input()
  public action: ActionButton;

  @Input()
  public data: any;

  public getSelected(): ActionButton {
    for (const action of this.action.subActions) {
      if ((typeof action.selected === 'function' && action.selected(this.data)) || action.selected === true) {
        return action;
      }
    }
    return null;
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

  public getSubActionDisabled(action: ActionButton): boolean {
    return readPropValue(action.disabled, this.data);
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
