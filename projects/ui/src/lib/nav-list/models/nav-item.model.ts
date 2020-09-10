export interface NavItem {
  label: string;
  icon?: Icon;
  route?: string;
  children?: NavItem[];
}

export interface NavItemGroup {
  label: string;
  items: NavItem[];
  icon?: Icon;
}
export interface Icon {
  name?: string;
  svgName?: string;
  position?: 'left' | 'right';
}
