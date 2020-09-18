import { Component, Input } from '@angular/core';
import { TableAction } from '../../models/table-action.model';

@Component({
  selector: 'lab900-table-action',
  templateUrl: './table-action.component.html',
})
export class TableActionComponent {
  @Input()
  public action: TableAction;

  @Input()
  public element: any;

  public get actionLabel(): string {
    return this.getLabel(this.action);
  }

  public getLabel(action: TableAction): string {
    return typeof action?.label === 'function' ? action.label(this.element) : action.label;
  }
}
