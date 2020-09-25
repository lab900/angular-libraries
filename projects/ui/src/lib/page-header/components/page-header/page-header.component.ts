import { Component, Input, OnInit } from '@angular/core';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';
import { PageHeaderAction } from '../../models/page-header-actions.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lab900-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class Lab900PageHeaderComponent implements OnInit {
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

  public currentSelected: PageHeaderNavItem;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Set the initial item as selected
    this.currentSelected = this.navItems.length > 0 ? this.navItems[0] : null;
    for (const navItem of this.navItems) {
      if (this.hasRequestParams(navItem.queryParams)) {
        this.currentSelected = navItem;
      }
    }
  }

  public getLabel(item: PageHeaderNavItem | PageHeaderAction): string {
    if (typeof item.label === 'function') {
      return item.label(this.data);
    }
    return item.label;
  }

  public hasRequestParams(params: { [key: string]: any }) {
    const paramMap = this.activatedRoute.snapshot.queryParamMap;
    if (!paramMap || !params) {
      return false;
    }
    for (const param of Object.keys(params)) {
      if (params[param] !== paramMap.get(param)) {
        return false;
      }
    }
    return true;
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
