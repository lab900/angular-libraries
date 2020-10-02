export interface MergeConfig<T> {
  attribute: string;
  label: string;
  formatter?: (data: T) => string;
  rowClass?: string;
  nextLine?: boolean;
  active?: boolean;
}
