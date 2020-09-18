type propFunction<T> = (data: T, cell: TableCell) => string;

export interface TableCell<T = any> {
  key: string;
  label: propFunction<T> | string;
  cellClass?: propFunction<T> | string;
  cellFormatter?: propFunction<T>;
  hide?: (data: T, cell: TableCell) => boolean;
  sortable?: boolean;
  sticky?: boolean;
}
