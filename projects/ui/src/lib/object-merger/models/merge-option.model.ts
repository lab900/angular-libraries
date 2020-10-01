export interface MergeOption<T = any> {
  attribute: string;
  label: string;
  formatter?: (data: T) => string;
  rowClass?: string;
  nextLine?: boolean;
}
