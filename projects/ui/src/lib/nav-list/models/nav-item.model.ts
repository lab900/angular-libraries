export interface NavItem {
  label: string;
  icon?: Icon;
  route?: string;
  routeQueryParams?: {
    [k: string]: any;
  };
  href?: { url: string; target?: '_self' | '_blank' };
  children?: NavItem[];
  childrenInOverlay?: boolean;
  hide?: (() => boolean) | boolean;
}

export interface NavItemGroup {
  label?: string;
  items: NavItem[];
  icon?: Icon;
  hide?: (() => boolean) | boolean;
}

export interface Icon {
  name?: string;
  svgName?: string;
  position?: 'left' | 'right';
}
