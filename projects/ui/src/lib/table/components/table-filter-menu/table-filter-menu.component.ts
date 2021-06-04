import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';

@Component({
  selector: 'lab900-table-filter-menu',
  templateUrl: './table-filter-menu.component.html',
  styleUrls: ['./table-filter-menu.component.scss'],
})
export class Lab900TableFilterMenuComponent {
  @Input()
  public tableCells: TableCell[];

  @Input()
  public filterIcon = 'filter_alt';

  @Input()
  public enableMoveColumns = false;

  @Output()
  public filterChanged: EventEmitter<TableCell[]> = new EventEmitter<TableCell[]>();

  public get cells(): TableCell[] {
    return (this.tableCells || []).filter((cell: TableCell) => !cell.alwaysVisible);
  }

  public handleCheckboxClick(event: Event, cell: TableCell): void {
    event.stopPropagation();
    event.preventDefault();
    cell.hide = !cell.hide;
    this.filterChanged.emit(this.tableCells);
  }

  public getCellLabel(cell: TableCell): string {
    return typeof cell.label === 'function' ? cell.label(cell) : cell.label;
  }
}
