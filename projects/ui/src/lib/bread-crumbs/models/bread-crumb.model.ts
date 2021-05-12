export interface BreadCrumb {
  title: string;
  route: ((data: any) => string) | string;
  divider?: string;
}
