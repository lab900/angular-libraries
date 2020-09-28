import { Component, Input } from '@angular/core';
import { TableHeaderAction, TableRowAction } from '../../models/table-action.model';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'lab900-table-header-action',
  templateUrl: './table-header-action.component.html',
})
export class Lab900TableHeaderActionComponent {
  @Input()
  public action: TableHeaderAction;

  public get actionLabel(): string {
    return this.getLabel(this.action);
  }

  public get tooltipPosition(): TooltipPosition {
    return this.action?.tooltip?.position ?? 'above';
  }

  public getLabel(action: TableRowAction): string {
    return typeof action?.label === 'function' ? action.label() : action.label;
  }
}
