export interface MergeDifference<T = any> {
  primary: T;
  secondary: T;
  label: string;
  active: boolean;
  formatter?: (data: T) => string;
  rowClass?: string;
}
