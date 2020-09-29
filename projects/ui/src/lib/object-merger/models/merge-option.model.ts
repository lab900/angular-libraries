export interface MergeOption {
  attribute: string;
  label: string;
  formatter?: (data: any) => string;
  class?: string;
}
