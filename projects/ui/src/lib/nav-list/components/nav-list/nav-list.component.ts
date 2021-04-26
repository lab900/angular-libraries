import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NavItem, NavItemGroup } from '../../models/nav-item.model';

const hide = (i: { hide?: (() => boolean) | boolean }): boolean => {
  return typeof i?.hide === 'function' ? i.hide() : i?.hide ?? false;
};

@Component({
  selector: 'lab900-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent implements OnChanges {
  @Input()
  public navItemGroups: NavItemGroup[];

  @Input()
  public indentLevels = true;

  @Input()
  public showLevelArrows = false;

  @Input()
  public allowOverlayMenuUntil: string | string[] = 'xs';

  public filtersGroups: NavItemGroup[];

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.navItemGroups) {
      this.filtersGroups = [...this.navItemGroups]
        .filter((g) => !hide(g))
        .map((g) => {
          g.items = this.filterNavItems(g.items);
          return g;
        })
        .filter((g) => !!g.items?.length);
    }
  }

  private filterNavItems(items: NavItem[]): NavItem[] {
    return [...items]
      .filter((i) => !hide(i))
      .map((i) => {
        if (i?.children?.length) {
          i.children = this.filterNavItems(i.children);
        }
        return i;
      })
      .filter((i) => !!i?.children?.length || i?.route || i?.href);
  }
}
