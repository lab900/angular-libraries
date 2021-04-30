import { ChangeDetectionStrategy, Component, HostBinding, Input, Output, ViewChild, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableCustomCellDirective } from '../../directives/table-custom-cell.directive';
import { SortDirection } from '@angular/material/sort';
import { Lab900Sort } from '../table/table.component';
import { MatColumnDef } from '@angular/material/table';

@Component({
  selector: 'lab900-table-cell',
  templateUrl: './table-cell.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lab900TableCellComponent {
  @HostBinding()
  public className = 'lab900-table-cell';

  @ViewChild(MatColumnDef, { static: true })
  public columnDef!: MatColumnDef;

  // tslint:disable-next-line:variable-name
  private _cell: TableCell;

  get cell(): TableCell {
    return this._cell;
  }

  @Input()
  set cell(value: TableCell) {
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
  public headerClick = new EventEmitter<TableCell>();

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

  public getCellClass(data: any): string {
    return typeof this.cell.cellClass === 'function' ? this.cell.cellClass(data, this.cell) : this.cell.cellClass ?? '';
  }

  private getCellLabel(): string {
    return typeof this.cell.label === 'function' ? this.cell.label(this.cell) : this.cell.label;
  }

  private getCellHeaderClass(): string {
    return typeof this.cell.cellHeaderClass === 'function' ? this.cell.cellHeaderClass(this.cell) : this.cell.cellHeaderClass ?? '';
  }

  private getCellHeaderIcon(): string {
    return typeof this.cell.cellHeaderIcon === 'function' ? this.cell.cellHeaderIcon(this.cell) : this.cell.cellHeaderIcon ?? '';
  }

  private getCellHeaderSvgIcon(): string {
    return typeof this.cell.cellHeaderSvgIcon === 'function' ? this.cell.cellHeaderSvgIcon(this.cell) : this.cell.cellHeaderSvgIcon ?? '';
  }
}
