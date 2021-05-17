import { Component, Input } from '@angular/core';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';
import { ActionButton } from '../../../button/models/action-button.model';
import { BreadCrumb } from '../../../bread-crumbs/models/bread-crumb.model';
import { readPropValue } from '../../../utils/utils';

@Component({
  selector: 'lab900-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class Lab900PageHeaderComponent {
  @Input()
  public pageTitle: string;

  @Input()
  public pageTitleArgs: object = {};

  @Input()
  public navItems: PageHeaderNavItem[];

  @Input()
  public actions: ActionButton[];

  @Input()
  public data?: any;

  @Input()
  public breadCrumbs: BreadCrumb[];

  public getLabel(item: PageHeaderNavItem): string {
    if (typeof item.label === 'function') {
      return item.label(this.data);
    }
    return item.label;
  }

  public getRoute(route: ((data: any) => string) | string): string | null {
    return readPropValue(route, this.data);
  }
}
