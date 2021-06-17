import { Component, HostBinding, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableCustomCellDirective } from '../../directives/table-custom-cell.directive';
import { SortDirection } from '@angular/material/sort';
import { Lab900Sort } from '../table/table.component';
import { MatColumnDef } from '@angular/material/table';
import { readPropValue } from '../../../utils/utils';

@Component({
  selector: 'lab900-table-cell',
  templateUrl: './table-cell.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class Lab900TableCellComponent<T = any> {
  @HostBinding()
  public className = 'lab900-table-cell';

  @ViewChild(MatColumnDef, { static: true })
  public columnDef!: MatColumnDef;

  // tslint:disable-next-line:variable-name
  private _cell: TableCell<T>;

  get cell(): TableCell<T> {
    return this._cell;
  }

  @Input()
  set cell(value: TableCell<T>) {
    this._cell = value;
    if (value?.key) {
      this.columnDef.name = this._cell.key;
      this.cellHeaderClass = this.getCellHeaderClass();
      this.cellHeaderIcon = this.getCellHeaderIcon();
      this.cellHeaderSvgIcon = this.getCellHeaderSvgIcon();
      this.cellLabel = this.getCellLabel();
    }
  }

  @Input()
  public sort: Lab900Sort[] = [];

  @Input()
  public customCellContent?: Lab900TableCustomCellDirective;

  @Output()
  public headerClick = new EventEmitter<TableCell<T>>();

  public cellClass: string;
  public cellHeaderClass: string;
  public cellHeaderIcon: string;
  public cellHeaderSvgIcon: string;
  public cellLabel: string;

  public get sortDirection(): SortDirection {
    return (this.sort || []).find((s) => s.id === this.cell.key)?.direction ?? '';
  }

  public get sortIcon(): string {
    if (this.sortDirection === 'asc') {
      return 'north';
    } else if (this.sortDirection === 'desc') {
      return 'south';
    }
  }

  public getCellClass(data: T): string {
    return readPropValue<[T, TableCell<T>]>(this.cell.cellClass, [data, this.cell]);
  }

  public getCellLabel(): string {
    return readPropValue<TableCell<T>>(this.cell.label, this.cell);
  }

  public getCellHeaderClass(): string {
    return readPropValue<TableCell<T>>(this.cell.cellHeaderClass, this.cell);
  }

  public getCellHeaderIcon(): string {
    return readPropValue<TableCell<T>>(this.cell.cellHeaderIcon, this.cell);
  }

  public getCellHeaderSvgIcon(): string {
    return readPropValue<TableCell<T>>(this.cell.cellHeaderSvgIcon, this.cell);
  }
}
