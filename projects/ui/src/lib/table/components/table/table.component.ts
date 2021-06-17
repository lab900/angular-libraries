import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { Lab900TableEmptyDirective } from '../../directives/table-empty.directive';
import { TableCell } from '../../models/table-cell.model';
import { Lab900TableDisabledDirective } from '../../directives/table-disabled.directive';
import { Paging } from '../../../common/models/paging.model';
import { PageEvent } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Lab900TableHeaderContentDirective } from '../../directives/table-header-content.directive';
import { ActionButton } from '../../../button/models/action-button.model';
import { Lab900TableCustomCellDirective } from '../../directives/table-custom-cell.directive';
import { SortDirection } from '@angular/material/sort';
import { Lab900TableTopContentDirective } from '../../directives/table-top-content.directive';
import { MatColumnDef, MatTable } from '@angular/material/table';
import { Lab900TableCellComponent } from '../table-cell/table-cell.component';

type propFunction<T, R = string> = (data: T) => R;

export interface Lab900Sort {
  /** The id of the column being sorted. */
  id: string;
  /** The sort direction. */
  direction: SortDirection;
}

@Component({
  selector: 'lab900-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Lab900TableComponent implements OnChanges {
  @Input()
  public set tableCells(cells: TableCell[]) {
    this._tableCells = cells.sort(Lab900TableComponent.reorderColumnsFn);
    setTimeout(() => {
      this.removeOldColumnsFromTable();
      this.addColumnsToTable();
    });
  }

  public get tableCells(): TableCell[] {
    return this._tableCells;
  }

  public get selectCount(): number {
    return this.selection.selected.length;
  }

  public get selectEnabled(): boolean {
    return this.selectableRowsEnabled && (this.maxSelectableRows ? this.selection.selected.length < this.maxSelectableRows : true);
  }
  @ViewChild(MatTable)
  public table!: MatTable<object>;

  @ViewChildren(Lab900TableCellComponent)
  public cellComponents!: QueryList<Lab900TableCellComponent>;

  @Input()
  public selection = new SelectionModel<object>(false, []);

  @Input()
  public data: any[];

  @Input()
  public tableClass: string;

  @Input()
  public rowClass: propFunction<any> | string;

  @Input()
  public pageSizeConfig: { hidePageSize?: boolean; pageSizeOptions?: number[] } = { hidePageSize: true, pageSizeOptions: [5, 10, 50] };

  @Input()
  public loading = false;

  // tslint:disable-next-line:variable-name
  private _tableCells: TableCell[];

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
  public selectableRowsEnabled: boolean;

  @Input()
  public selectedItems: any[];

  @Input()
  public multiSelect: boolean;

  @Input()
  public maxSelectableRows: number;

  /**
   * Show columns filter to hide/show columns
   */
  @Input()
  public toggleColumns = false;

  /**
   * Show columns filter to hide/show columns AND show rearrange option
   * This overrides toggleColumns field
   */
  @Input()
  public toggleAndMoveColumns = false;

  @Input()
  public filterIcon = 'filter_alt';

  @Input()
  public neverHideTable = false;

  @Input()
  public disabled = false;

  @Input()
  public sort: Lab900Sort[] = [];

  @Input()
  public multiSort = false;

  @Output()
  public readonly sortChange = new EventEmitter<Lab900Sort[]>();

  @Input()
  public paging?: Paging;

  @Input()
  public onRowClick: (value: any, index: number, event: Event) => void;

  @Output()
  public readonly pageChange = new EventEmitter<PageEvent>();

  @Output()
  public readonly selectionChanged = new EventEmitter<SelectionModel<any>>();

  @Output()
  public readonly rowSelectToggle = new EventEmitter<object>();

  @Output()
  public readonly tableCellsFiltered = new EventEmitter<TableCell[]>();

  @ContentChild(Lab900TableEmptyDirective, { read: TemplateRef })
  public emptyTableTemplate?: Lab900TableEmptyDirective;

  @ContentChild(Lab900TableDisabledDirective, { read: TemplateRef })
  public disabledTableTemplate?: Lab900TableDisabledDirective;

  @ContentChild(Lab900TableHeaderContentDirective, { read: TemplateRef })
  public tableHeaderContent?: Lab900TableHeaderContentDirective;

  @ContentChild(Lab900TableTopContentDirective, { read: TemplateRef })
  public tableTopContent?: Lab900TableTopContentDirective;

  @ContentChild(Lab900TableCustomCellDirective, { read: TemplateRef })
  public customCellContent?: Lab900TableCustomCellDirective;

  public displayedColumns: string[] = [];

  // when columnOrder is not specified, put them in the back (position 10000)
  public static reorderColumnsFn(a: TableCell, b: TableCell): number {
    return (a.columnOrder ?? 10000) - (b.columnOrder ?? 10000);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.multiSelect) {
      this.selection = new SelectionModel<any>(this.multiSelect, []);
    }
    if (changes.selectedItems) {
      this.selection.clear();
      this.selection.select(...this.selectedItems);
    }
  }

  public selectRow(row: object): void {
    this.selection.toggle(row);
    this.selectionChanged.emit(this.selection);
    this.rowSelectToggle.emit(row);
  }

  public getRowClasses(row: object, index: number): string {
    const classes: string[] = [];
    if (typeof this.onRowClick === 'function') {
      classes.push('lab900-row-clickable');
    }
    if (this.selection && this.selection.isSelected(row)) {
      classes.push('lab900-row-selected');
    }
    if (index % 2 === 0) {
      classes.push('lab900-row-even');
    } else {
      classes.push('lab900-row-odd');
    }

    classes.push(typeof this.rowClass === 'function' ? this.rowClass(row) : this.rowClass ?? '');
    return classes.join(' ') || '';
  }

  public handleRowClick(event: Event, row: object, index: number): void {
    if (typeof this.onRowClick === 'function') {
      this.onRowClick(row, index, event);
    }
  }

  public trackCellFn(_, item: TableCell): string {
    return item.key;
  }

  public handleHeaderClick(cell: TableCell): void {
    if (cell.sortable) {
      if (this.multiSort) {
        const currentIndex = (this.sort || []).findIndex((s) => s.id === cell.key);
        if (currentIndex >= 0) {
          const { direction } = this.sort[currentIndex];
          if (direction === 'desc') {
            this.sort.splice(currentIndex, 1);
          } else {
            this.sort[currentIndex] = { ...this.sort[currentIndex], direction: 'desc' };
          }
        } else {
          this.sort.push({ id: cell.key, direction: 'asc' });
        }
      } else {
        const inCurrent = (this.sort || []).find((s) => s.id === cell.key);
        this.sort = [{ id: cell.key, direction: inCurrent?.direction === 'asc' ? 'desc' : 'asc' }];
      }
      this.sortChange.emit(this.sort);
    }
  }

  public onTableCellsFiltered(tableCells: TableCell[]): void {
    this.tableCells = tableCells.sort(Lab900TableComponent.reorderColumnsFn);
    this.addColumnsToTable();
    this.tableCellsFiltered.emit(tableCells);
  }

  private addColumnsToTable(): void {
    let columns = [];
    for (const column of this.cellComponents.toArray()) {
      this.table.addColumnDef(column.columnDef);
      if (!column.cell.hide) {
        columns = [...columns, column.cell.key];
      }
    }
    if (this.tableActionsFront?.length) {
      columns.unshift('actions-front');
    }
    if (this.tableActionsBack?.length) {
      columns.push('actions-back');
    }
    if (this.selectableRows) {
      columns.unshift('select');
    }
    this.displayedColumns = columns;
  }

  private removeOldColumnsFromTable(): void {
    const oldColumns: Set<MatColumnDef> = (this.table as any)._customColumnDefs;
    oldColumns.forEach((oldColumn: MatColumnDef) => {
      this.table.removeColumnDef(oldColumn);
      // removing column also from the displayed columns (such array should match the dataSource!)
      this.displayedColumns.splice(
        this.displayedColumns.findIndex((column: string) => column === oldColumn.name),
        1,
      );
    });
  }
}
