import { Component, Input } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { ThemePalette } from '@angular/material/core';

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
      if ((typeof action.selected === 'function' && action.selected(this.data)) || action.selected) {
        return action;
      }
    }
    return null;
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

  public getHidden(): boolean {
    if (typeof this.action.hide === 'function') {
      return this.action.hide(this.data);
    }
    return this.action.hide;
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
