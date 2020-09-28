import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { Lab900TableEmptyDirective } from '../../directives/table-empty.directive';
import { TableCell } from '../../models/table-cell.model';
import { TableAction } from '../../models/table-action.model';
import { Lab900TableDisabledDirective } from '../../directives/table-disabled.directive';
import { Sort } from '@angular/material/sort';
import { Paging } from '../../../common/models/paging.model';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'lab900-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class Lab900TableComponent {
  @Input()
  public selection = new SelectionModel<any>(true, []);

  @Input()
  public data: any[];

  @Input()
  public tableClass: string;

  @Input()
  public loading = false;

  @Input()
  public tableCells: TableCell[];

  /**
   * @deprecated
   * @use tableActionsBack or tableActionsFront
   */
  @Input()
  public tableActions: TableAction[];

  @Input()
  public tableActionsFront: TableAction[];

  @Input()
  public tableActionsBack: TableAction[];

  @Input()
  public selectableRows: boolean;

  @Input()
  public maxSelectableRows: number;

  @Input()
  public neverHideTable = false;

  @Input()
  public disabled = false;

  @Input()
  public activeSort: Sort;

  @Input()
  public paging?: Paging;

  @Output()
  public readonly pageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @Output()
  public readonly sort: EventEmitter<Sort> = new EventEmitter<Sort>();

  @Output()
  public readonly selectionChanged: EventEmitter<SelectionModel<any>> = new EventEmitter<SelectionModel<any>>();

  @ContentChild(Lab900TableEmptyDirective, { read: TemplateRef })
  public emptyTableTemplate?: Lab900TableEmptyDirective;

  @ContentChild(Lab900TableDisabledDirective, { read: TemplateRef })
  public disabledTableTemplate?: Lab900TableDisabledDirective;

  public get selectCount(): number {
    return this.selection.selected.length;
  }

  public get selectEnabled(): boolean {
    return this.maxSelectableRows ? this.selection.selected.length < this.maxSelectableRows : true;
  }

  public get displayedColumns(): string[] {
    const keys = this.tableCells?.map((cell: TableCell) => cell.key) ?? [];
    if (this.tableActionsFront?.length) {
      keys.unshift('actions-front');
    }
    if (this.tableActionsBack?.length || this.tableActions?.length) {
      keys.push('actions-back');
    }
    if (this.selectableRows) {
      keys.unshift('select');
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

  public selectRow(row: any): void {
    this.selection.toggle(row);
    this.selectionChanged.emit(this.selection);
  }
}
