import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';

@Component({
  selector: 'lab900-table-cell-value',
  template: ` <ng-container *ngIf="cell && cellValue">
    <span *ngIf="!cell.click" [matTooltipClass]="'lab900-table__mat-tooltip'" [matTooltip]="getMatTooltip()">
      {{ cellValue | translate }}
    </span>
    <a
      style="cursor: pointer"
      *ngIf="cell.click"
      (click)="cell.click(data, cell)"
      [matTooltipClass]="'lab900-table__mat-tooltip'"
      [matTooltip]="getMatTooltip()"
    >
      {{ cellValue | translate }}
    </a>
  </ng-container>`,
})
export class Lab900TableCellValueComponent<T = any> implements OnChanges {
  @Input()
  public data!: T;

  @Input()
  public cell!: TableCell<T>;

  public cellValue: string;

  public static getCellValue<T = any>(cell: TableCell<T>, data: T): string {
    if (cell.cellFormatter) {
      return cell.cellFormatter(data, cell);
    } else if (cell.key.includes('.')) {
      const keys = cell.key.split('.');
      let value: any = data;
      for (const key of keys) {
        value = value?.[key] ?? '';
      }
      return value;
    }
    return data?.[cell.key] ?? '';
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ((changes.data || changes.cell) && this.cell) {
      this.cellValue = Lab900TableCellValueComponent.getCellValue<T>(this.cell, this.data);
    }
  }

  public getMatTooltip(): string {
    return this.cell.cellTooltip ? this.cell.cellTooltip(this.data, this.cell) : '';
  }
}
