export interface MergeConfig {
  attribute: string;
  label: string;
  formatter?: (data: any) => string;
  rowClass?: string;
  nextLine?: boolean;
  active?: boolean;
}
