export interface MergeDifference<T = any> {
  right: T;
  left: T;
  label: string;
  active: boolean;
  hidden: boolean;
  formatter?: (data: T) => string;
  rowClass?: string;
}
