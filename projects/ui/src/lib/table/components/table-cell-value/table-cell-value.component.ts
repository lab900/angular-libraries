import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableCell } from '../../models/table-cell.model';

@Component({
  selector: 'lab900-table-cell-value',
  templateUrl: './table-cell-value.component.html',
})
export class TableCellValueComponent implements OnChanges {
  @Input()
  public data!: any;

  @Input()
  public cell!: TableCell;

  public cellValue: string;

  public ngOnChanges(changes: SimpleChanges): void {
    if ((changes.data || changes.cell) && this.cell) {
      this.cellValue = this.getCellValue();
    }
  }

  public getCellValue(): string {
    if (this.cell.cellFormatter) {
      return this.cell.cellFormatter(this.data, this.cell);
    } else if (this.cell.key.includes('.')) {
      const keys = this.cell.key.split('.');
      let value = this.data;
      for (const key of keys) {
        value = value?.[key] ?? '';
      }
      return value;
    }
    return this.data?.[this.cell.key] ?? '';
  }
}
