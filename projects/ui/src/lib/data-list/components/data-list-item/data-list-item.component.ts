import { Component, Input } from '@angular/core';
import { DataListItemAction, DataListSharing } from '../../models/data-list.model';
import { Lab900DataListItemInfoDirective } from '../../directives/data-list-item-info.directive';

@Component({
  selector: 'lab900-data-list-item',
  templateUrl: './data-list-item.component.html',
  styleUrls: ['./data-list-item.component.scss'],
})
export class Lab900DataListItemComponent {
  @Input()
  public data: any;

  @Input()
  public actions: DataListItemAction[] = [];

  @Input()
  public dataListItemInfoTemplate?: Lab900DataListItemInfoDirective;

  @Input()
  public dataListSharing?: DataListSharing;

  public getLabel(action: DataListItemAction): string {
    if (typeof action.label === 'function') {
      return action.label(this.data);
    }
    return action.label;
  }

  public getIcon(action: DataListItemAction): string {
    if (typeof action.icon === 'function') {
      return action.icon(this.data);
    }
    return action.icon;
  }
}
