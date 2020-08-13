import { Component } from '@angular/core';
import { NavItemGroup } from '@lab900/ui';

@Component({
  selector: 'lab900-alerts-example',
  template: '<lab900-nav-list [navItemGroups]="navItemGroups"></lab900-nav-list>',
})
export class NavListExampleComponent {
  public navItemGroups: NavItemGroup[] = [
    {
      label: 'Nav group 1',
      items: [
        {
          label: 'Sub level',
          children: [
            {
              label: 'Actual link',
              route: '/ui/nav-list',
            },
            {
              label: 'Actual link',
              route: '/',
            },
          ],
        },
        {
          label: 'Sub level 2',
          children: [
            {
              label: 'Actual link',
              route: '/ui/nav-list',
            },
            {
              label: 'Actual link',
              route: '/',
            },
          ],
        },
      ],
    },
    {
      label: 'Nav group 2',
      items: [
        {
          label: 'Sub level',
          children: [
            {
              label: 'Actual link',
              route: '/ui/nav-list',
            },
            {
              label: 'Actual link',
              route: '/',
            },
          ],
        },
        {
          label: 'Sub level 2',
          children: [
            {
              label: 'Actual link',
              route: '/ui/nav-list',
            },
            {
              label: 'Actual link',
              route: '/',
            },
          ],
        },
      ],
    },
  ];
}
