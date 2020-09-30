export interface NavItem {
  label: string;
  icon?: Icon;
  route?: string;
  routeQueryParams?: {
    [k: string]: any;
  };
  href?: { url: string; target?: '_self' | '_blank' };
  children?: NavItem[];
}

export interface NavItemGroup {
  label?: string;
  items: NavItem[];
  icon?: Icon;
}
export interface Icon {
  name?: string;
  svgName?: string;
  position?: 'left' | 'right';
}
