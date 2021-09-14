import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowcaseRouteData } from '../../models/showcase-route.model';
import { PageHeaderNavItem } from '@lab900/ui';
import { SubscriptionBasedDirective } from '../../directives/subscription-based.directive';

@Component({
  selector: 'lab900-showcase-page',
  templateUrl: './showcase-page.component.html',
  styleUrls: ['./showcase-page.component.scss'],
})
export class ShowcasePageComponent extends SubscriptionBasedDirective {
  private readonly guideNav: PageHeaderNavItem = {
    label: 'Guide',
    queryParams: { tab: 'guide' },
  };

  private readonly exampleNav: PageHeaderNavItem = {
    label: 'Examples',
    queryParams: { tab: 'examples' },
  };

  public currentTab: 'guide' | 'examples' = 'guide';
  public examples: any[];
  public data: ShowcaseRouteData;
  public navItems: PageHeaderNavItem[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    super();
    this.addSubscription(this.activatedRoute.queryParams, (queryParams) => {
      this.data = this.activatedRoute.snapshot.data as ShowcaseRouteData;
      this.navItems = !this.data?.docFile ? [this.exampleNav] : [this.guideNav, this.exampleNav];
      if (queryParams?.tab) {
        this.currentTab = queryParams?.tab;
      } else {
        this.router.navigate([], {
          relativeTo: this.activatedRoute,
          queryParams: { tab: this.data?.docFile ? 'guide' : 'examples' },
        });
      }
    });
  }
}
