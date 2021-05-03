import { propValue } from '../../utils/utils';

export interface TableCell<T = any> {
  /**
   * Column key
   */
  key: string;
  /**
   * Column header label
   */
  label: propValue<TableCell>;
  /**
   * Custom cell class
   */
  cellClass?: propValue<[T, TableCell<T>]>;
  /**
   * Custom cell header class
   */
  cellHeaderClass?: propValue<TableCell<T>>;
  /**
   * Cell header icon
   */
  cellHeaderIcon?: propValue<TableCell<T>>;
  /**
   * Cell header svgicon
   */
  cellHeaderSvgIcon?: propValue<TableCell<T>>;
  /**
   * Custom formatter to display data inside the cell
   */
  cellFormatter?: (data: T, cell: TableCell) => string;
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
  click?: (data: T, cell: TableCell) => any;
  /**
   * render a different cell template
   */
  customCellContent?: boolean;
}
