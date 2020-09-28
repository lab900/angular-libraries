export interface ObjectMergerDifference {
  [key: string]: {
    primary: any;
    secondary: any;
    active: boolean;
  };
}
