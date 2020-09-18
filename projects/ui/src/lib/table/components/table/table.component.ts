import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Lab900TableEmptyDirective } from '../../directives/table-empty.directive';
import { TableCell } from '../../models/table-cell.model';
import { TableAction } from '../../models/table-action.model';
import { Lab900TableDisabledDirective } from '../../directives/table-disabled.directive';
import { Sort, SortDirection } from '@angular/material/sort';

@Component({
  selector: 'lab900-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class Lab900TableComponent {
  @Input()
  public data: any[];

  @Input()
  public tableClass: string;

  @Input()
  public loading = false;

  @Input()
  public tableCells: TableCell[];

  @Input()
  public tableActions: TableAction[];

  @Input()
  public neverHideTable = false;

  @Input()
  public disabled = false;

  @Input()
  public activeSort: Sort;

  @Output()
  public sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  @ContentChild(Lab900TableEmptyDirective, { read: TemplateRef })
  public emptyTableTemplate?: Lab900TableEmptyDirective;

  @ContentChild(Lab900TableDisabledDirective, { read: TemplateRef })
  public disabledTableTemplate?: Lab900TableDisabledDirective;

  public get displayedColumns(): string[] {
    const keys = this.tableCells?.map((cell: TableCell) => cell.key) ?? [];
    if (this.tableActions?.length) {
      keys.push('actions');
    }
    return keys;
  }

  public getCellLabel(data: any, cell: TableCell): string {
    return typeof cell.label === 'function' ? cell.label(data, cell) : cell.label;
  }

  public getCellValue(data: any, cell: TableCell): string {
    return cell.cellFormatter ? cell.cellFormatter(data, cell) : data[cell.key];
  }

  public getCellClass(data: any, cell: TableCell): string {
    return typeof cell.cellClass === 'function' ? cell.cellClass(data, cell) : cell.cellClass ?? '';
  }
}
