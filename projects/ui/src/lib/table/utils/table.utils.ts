import { TableCell } from '../models/table-cell.model';

export class Lab900TableUtils {
  public static getCellLabel(cell: TableCell): string {
    return typeof cell.label === 'function' ? cell.label(cell) : cell.label;
  }

  public static getCellValue(data: any, cell: TableCell): string {
    return cell.cellFormatter ? cell.cellFormatter(data, cell) : data[cell.key];
  }

  public static getCellClass(data: any, cell: TableCell): string {
    return typeof cell.cellClass === 'function' ? cell.cellClass(data, cell) : cell.cellClass ?? '';
  }
}
