import { Component, Input, ViewChild } from '@angular/core';
import { ActionButton } from '../../models/action-button.model';
import { MatMenu } from '@angular/material/menu';
import { readPropValue } from '../../../utils/utils';

@Component({
  selector: 'lab900-action-button-menu',
  templateUrl: './lab900-action-button-menu.component.html',
})
export class Lab900ActionButtonMenuComponent {
  @ViewChild('actionMenu', { static: true })
  public actionMenu: MatMenu;

  @Input()
  public actions: ActionButton[];

  @Input()
  public data: any;

  public getLabel(action: ActionButton): string {
    return readPropValue(action.label, this.data);
  }

  public getDisabled(action: ActionButton): boolean {
    return readPropValue(action.disabled, this.data);
  }

  public doAction(e: Event, action: ActionButton): void {
    e.stopPropagation();
    if (action.action) {
      action.action(this.data, e);
    }
  }

  public getPrefixIcon(action: ActionButton): string {
    return readPropValue(action.prefixIcon, this.data);
  }

  public getSuffixIcon(action: ActionButton): string {
    return readPropValue(action.suffixIcon, this.data);
  }
}
