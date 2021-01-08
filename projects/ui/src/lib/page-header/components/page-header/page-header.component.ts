import { Component, Input } from '@angular/core';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';
import { ActionButton } from '../../../button/models/action-button.model';
import { isObservable, Observable, of } from 'rxjs';

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

  public getLabel(item: PageHeaderNavItem): string {
    if (typeof item.label === 'function') {
      return item.label(this.data);
    }
    return item.label;
  }

  public getParams(item: PageHeaderNavItem): Observable<any> {
    if (!isObservable(item.queryParams)) {
      return of(item.queryParams);
    }
    return item.queryParams;
  }

  public getRoute(item: PageHeaderNavItem): string | void {
    if (item.route) {
      if (typeof item.route === 'function') {
        return item.route(this.data);
      }
      return item.route;
    }
  }
}
