import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { NavItem } from '../../models/nav-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lab900-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit, OnDestroy {
  private sub: Subscription;

  @Input()
  public item: NavItem;

  @Input()
  public depth = 0;

  @Input()
  public disabled = false;

  public expanded = false;

  public constructor(public router: Router) {}

  public ngOnInit(): void {
    if (!this.item.route && !this.item.children) {
      this.disabled = true;
    } else {
      this.sub = this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects;
          if (this.item.children && url) {
            this.expanded = this.item.children.some((item: NavItem) => url.indexOf(`/${item.route}`) === 0);
          }
        }
      });
    }
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public onItemSelected() {
    if (!this.item.children || !this.item.children.length) {
      this.router.navigate([this.item.route]);
    }
    if (this.item.children && this.item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
