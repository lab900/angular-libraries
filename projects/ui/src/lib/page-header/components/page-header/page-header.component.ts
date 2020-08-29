import { Component, Input } from '@angular/core';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';
import { PageHeaderAction } from '../../models/page-header-actions.model';

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
  public actions: PageHeaderAction[];

  @Input()
  public data?: any;

  public getLabel(item: PageHeaderNavItem | PageHeaderAction): string {
    if (typeof item.label === 'function') {
      return item.label(this.data);
    }
    return item.label;
  }

  public getRoute(item: PageHeaderNavItem): string {
    if (typeof item.route === 'function') {
      return item.route(this.data);
    }
    return item.route;
  }
}
