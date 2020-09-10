import { Icon } from '@lab900/forms';

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
