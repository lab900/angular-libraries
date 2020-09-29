import { Component, ContentChild, EventEmitter, Input, OnChanges, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { Lab900TableEmptyDirective } from '../../directives/table-empty.directive';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableDisabledDirective } from '../../directives/table-disabled.directive';
import { Sort } from '@angular/material/sort';
import { Paging } from '../../../common/models/paging.model';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Lab900TableUtils } from '../../utils/table.utils';
import { Lab900TableHeaderContentDirective } from '../../directives/table-header-content.directive';
import { ActionButton } from '../../../button/models/action-button.model';

@Component({
  selector: 'lab900-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class Lab900TableComponent implements OnChanges {
  public readonly utils = Lab900TableUtils;

  @Input()
  public selection = new SelectionModel<any>(false, []);

  @Input()
  public data: any[];

  @Input()
  public tableClass: string;

  @Input()
  public loading = false;

  @Input()
  public tableCells: TableCell[];

  /**
   * Show a set of action at the top of the table
   */
  @Input()
  public tableHeaderActions: ActionButton[];

  /**
   * Show a set of action at the start of each row
   */
  @Input()
  public tableActionsFront: ActionButton[];

  /**
   * Show a set of action at the end of each row
   */
  @Input()
  public tableActionsBack: ActionButton[];

  /**
   * Enable checkboxes in front of the table rows
   */
  @Input()
  public selectableRows: boolean;

  @Input()
  public multiSelect: boolean;

  @Input()
  public maxSelectableRows: number;

  /**
   * Show columns filter to hide/show columns
   */
  @Input()
  public toggleColumns = false;

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

  @ContentChild(Lab900TableHeaderContentDirective, { read: TemplateRef })
  public tableHeaderContent?: Lab900TableHeaderContentDirective;

  public get selectCount(): number {
    return this.selection.selected.length;
  }

  public get selectEnabled(): boolean {
    return this.maxSelectableRows ? this.selection.selected.length < this.maxSelectableRows : true;
  }

  public get displayedColumns(): string[] {
    const keys = this.tableCells?.filter((cell: TableCell) => !cell.hide).map((cell: TableCell) => cell.key) ?? [];
    if (this.tableActionsFront?.length) {
      keys.unshift('actions-front');
    }
    if (this.tableActionsBack?.length) {
      keys.push('actions-back');
    }
    if (this.selectableRows) {
      keys.unshift('select');
    }
    return keys;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.multiSelect) {
      this.selection = new SelectionModel<any>(this.multiSelect, []);
    }
  }

  public selectRow(row: any): void {
    this.selection.toggle(row);
    this.selectionChanged.emit(this.selection);
  }
}
