export interface MergeDifference {
  primary: any;
  secondary: any;
  label: string;
  active: boolean;
  formatter?: (data: any) => string;
  class?: string;
}
