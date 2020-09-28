import { Component, Input } from '@angular/core';
import { TableRowAction } from '../../models/table-action.model';
import { TableCell } from '../../models/table-cell.model';

@Component({
  selector: 'lab900-table-header',
  templateUrl: './lab900-table-header.component.html',
})
export class Lab900TableHeaderComponent {
  /**
   * Show a set of action at the top of the table
   */
  @Input()
  public tableHeaderActions: TableRowAction[];

  /**
   * Show columns filter to hide/show columns
   */
  @Input()
  public toggleColumns = true;

  @Input()
  public tableCells: TableCell[];
}
