import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Lab900TableEmptyDirective } from '../../directives/table-empty.directive';
import { TableCell } from '../../models/table-cell.model';
import { TableAction } from '../../models/table-action.model';
import { Lab900TableDisabledDirective } from '../../directives/table-disabled.directive';

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

  @ContentChild(Lab900TableEmptyDirective, { read: TemplateRef })
  public emptyTableTemplate?: Lab900TableEmptyDirective;

  @ContentChild(Lab900TableDisabledDirective, { read: TemplateRef })
  public disabledTableTemplate?: Lab900TableDisabledDirective;

  public get displayedColumns(): string[] {
    const keys = this.tableCells && this.tableCells.map((cell: TableCell) => cell.key);
    if (this.tableActions) {
      keys.push('actions');
    }
    return keys;
  }

  public getCellLabel(data: any, cell: TableCell): string {
    if (typeof cell.label === 'function') {
      return cell.label(data, cell);
    }
    return cell.label;
  }

  public getActionLabel(data: any, action: TableAction): string {
    if (typeof action.label === 'function') {
      return action.label(data);
    }
    return action.label;
  }

  public getCellValue(data: any, cell: TableCell): string {
    if (cell.cellFormatter) {
      return cell.cellFormatter(data, cell);
    }
    return data[cell.key];
  }

  public getCellClass(data: any, cell: TableCell): string {
    if (typeof cell.cellClass === 'function') {
      return cell.cellClass(data, cell);
    }
    return cell.cellClass || '';
  }
}
