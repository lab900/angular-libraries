type propFunction<T, R = string> = (data: T, cell: TableCell) => R;

export interface TableCell<T = any> {
  /**
   * Column key
   */
  key: string;
  /**
   * Column header label
   */
  label: ((cell: TableCell) => string) | string;
  /**
   * Custom cell class
   */
  cellClass?: propFunction<T> | string;
  /**
   * Custom formatter to display data inside the cell
   */
  cellFormatter?: propFunction<T>;
  /**
   * Should show column in the table
   */
  hide?: boolean;
  /**
   * Can't hide the column
   */
  alwaysVisible?: boolean;
  /**
   * Column is sortable
   */
  sortable?: boolean;
  /**
   * Column is sticky
   */
  sticky?: boolean;
  /**
   * Column width
   */
  width?: string;
  /**
   * on click
   */
  click?: propFunction<T, any>;
}
