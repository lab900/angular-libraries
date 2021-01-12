import { Component, Input } from '@angular/core';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';
import { ActionButton } from '../../../button/models/action-button.model';
import { isObservable, Observable, of } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'lab900-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class Lab900PageHeaderComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

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
  public matchConfig = {
    route: true,
    queryParams: true,
  };

  private static paramsEquals(paramsOne: Params, paramsTwo: Params): boolean {
    for (const key of Object.keys(paramsOne)) {
      if (paramsOne[key] !== paramsTwo[key]) {
        return false;
      }
    }
    return true;
  }

  public getLabel(item: PageHeaderNavItem): string {
    if (typeof item.label === 'function') {
      return item.label(this.data);
    }
    return item.label;
  }

  public getParams(item: PageHeaderNavItem): Observable<Params> {
    if (!isObservable(item.queryParams)) {
      return of(item.queryParams);
    }
    return item.queryParams;
  }

  public getRoute(item: PageHeaderNavItem): string | null {
    if (item.route) {
      if (typeof item.route === 'function') {
        return item.route(this.data);
      }
      return item.route;
    }
  }

  public isActive(navigationRoute: string | null, navigationParamsRoute: Params): boolean {
    const currentRoute = this.activatedRoute.snapshot.url;
    const currentParams = this.activatedRoute.snapshot.queryParams;
    const activeByRoute =
      !this.matchConfig.route &&
      (navigationRoute === null ||
        navigationRoute === undefined ||
        (currentRoute.length > 0 && currentRoute[currentRoute.length - 1].path === navigationRoute));
    const activeByParams = !this.matchConfig.queryParams && Lab900PageHeaderComponent.paramsEquals(navigationParamsRoute, currentParams);
    console.log(activeByParams && activeByRoute);
    return activeByParams && activeByRoute;
  }
}
