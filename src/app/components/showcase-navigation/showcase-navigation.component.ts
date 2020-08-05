import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface ShowcaseNavItem {
  title: string;
  route?: string;
  children?: ShowcaseNavItem[];
  expanded?: boolean;
}

interface ShowcaseNavGroup {
  title: string;
  children?: ShowcaseNavItem[];
}

const sections: ShowcaseNavGroup[] = [
  {
    title: 'Lab900 - Forms',
    children: [
      {
        title: 'Components',
        children: [
          {
            title: 'Form container',
            route: 'forms/form-container',
          },
        ],
      },
      {
        title: 'Form Fields',
        children: [
          {
            title: 'Input & Textarea',
            route: 'forms/form-field-input',
          },
          {
            title: 'Repeater',
            route: 'forms/form-field-repeater',
          },
          {
            title: 'Datepicker',
            route: 'forms/form-field-datepicker',
          },
        ],
      },
    ],
  },
];

@Component({
  selector: 'lab900-showcase-navigation',
  templateUrl: './showcase-navigation.component.html',
  styleUrls: ['./showcase-navigation.component.scss'],
})
export class ShowcaseNavigationComponent implements OnInit {
  public currentUrl = new BehaviorSubject<string>(undefined);
  public sections: ShowcaseNavGroup[] = sections;

  public constructor(public router: Router) {}

  public ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public onItemSelected(item: ShowcaseNavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
    if (item.children && item.children.length) {
      item.expanded = !item.expanded;
    }
  }
}
