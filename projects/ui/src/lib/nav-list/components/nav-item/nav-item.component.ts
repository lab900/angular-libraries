import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { NavItem } from '../../models/nav-item.model';

@Component({
  selector: 'lab900-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent implements OnInit {
  @Input()
  public item: NavItem;

  @Input()
  public depth = 0;

  public expanded = false;

  public constructor(public router: Router) {}

  public ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        if (this.item.children && url) {
          this.expanded = this.item.children.some((item: NavItem) => url.indexOf(`/${item.route}`) === 0);
        }
      }
    });
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
