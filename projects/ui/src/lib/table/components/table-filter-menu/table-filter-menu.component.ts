import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableUtils } from '../../utils/table.utils';

@Component({
  selector: 'lab900-table-filter-menu',
  templateUrl: './table-filter-menu.component.html',
  styleUrls: ['./table-filter-menu.component.scss'],
})
export class Lab900TableFilterMenuComponent {
  public readonly utils = Lab900TableUtils;

  @Input()
  public tableCells: TableCell[];

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
}
