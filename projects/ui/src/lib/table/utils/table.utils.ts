import { TableCell } from '../models/table-cell.model';

export class Lab900TableUtils {
  public static getCellLabel(cell: TableCell): string {
    return typeof cell.label === 'function' ? cell.label(cell) : cell.label;
  }

  public static getCellValue(data: any, cell: TableCell): string {
    if (cell.cellFormatter) {
      return cell.cellFormatter(data, cell);
    } else if (cell.key.includes('.')) {
      const keys = cell.key.split('.');
      let value = data;
      for (const key of keys) {
        value = value?.[key] ?? '';
      }
      return value;
    }
    return data?.[cell.key] ?? '';
  }

  public static getCellClass(data: any, cell: TableCell): string {
    return typeof cell.cellClass === 'function' ? cell.cellClass(data, cell) : cell.cellClass ?? '';
  }

  public static getCellHeaderClass(cell: TableCell): string {
    return typeof cell.cellHeaderClass === 'function' ? cell.cellHeaderClass(cell) : cell.cellHeaderClass ?? '';
  }

  public static getCellHeaderIcon(cell: TableCell): string {
    return typeof cell.cellHeaderIcon === 'function' ? cell.cellHeaderIcon(cell) : cell.cellHeaderIcon ?? '';
  }

  public static getCellHeaderSvgIcon(cell: TableCell): string {
    return typeof cell.cellHeaderSvgIcon === 'function' ? cell.cellHeaderSvgIcon(cell) : cell.cellHeaderSvgIcon ?? '';
  }
}
