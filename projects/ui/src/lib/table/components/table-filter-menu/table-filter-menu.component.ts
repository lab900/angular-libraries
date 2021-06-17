import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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
  public toggleAndMoveColumns = false;

  @Output()
  public filterChanged: EventEmitter<TableCell[]> = new EventEmitter<TableCell[]>();

  public get cells(): TableCell[] {
    return (this.tableCells || []).filter((cell: TableCell) => !cell.alwaysVisible);
  }

  public handleCheckboxClick(event: MouseEvent, cell: TableCell): void {
    event.stopPropagation();
    event.preventDefault();
    cell.hide = !cell.hide;
    this.filterChanged.emit(this.tableCells);
  }

  public getCellLabel(cell: TableCell): string {
    return typeof cell.label === 'function' ? cell.label(cell) : cell.label;
  }

  public getOnlyHiddenCells(cells: TableCell[]): TableCell[] {
    return cells?.filter((cell) => cell.hide);
  }

  public getOnlyShownCells(cells: TableCell[]): TableCell[] {
    return cells?.filter((cell) => !cell.hide);
  }

  public drop($event: CdkDragDrop<TableCell[]>): void {
    // ignore hidden columns
    const sortableCells: TableCell[] = this.getOnlyShownCells(this.cells);
    // apply reordering to array
    moveItemInArray(sortableCells, $event.previousIndex, $event.currentIndex);
    // set columnOrder based on new order
    sortableCells.forEach((cell, index) => {
      cell.columnOrder = index;
    });
    // apply these to the columns in the table
    // sorting of actual happens in table.component.ts
    this.filterChanged.emit(this.tableCells);
  }
}
