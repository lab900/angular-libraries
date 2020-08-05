export interface NavItem {
  label: string;
  route?: string;
  children?: NavItem[];
}

export interface NavItemGroup {
  label: string;
  items: NavItem[];
}
