import { Component, Input } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { ActionButton } from '../../../button/models/action-button.model';

@Component({
  selector: 'lab900-table-header',
  templateUrl: './lab900-table-header.component.html',
})
export class Lab900TableHeaderComponent {
  /**
   * Show a set of action at the top of the table
   */
  @Input()
  public tableHeaderActions: ActionButton[];

  /**
   * Show columns filter to hide/show columns
   */
  @Input()
  public toggleColumns = true;

  @Input()
  public tableCells: TableCell[];
}
