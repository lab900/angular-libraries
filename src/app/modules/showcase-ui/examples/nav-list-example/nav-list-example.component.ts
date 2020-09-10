import { Component } from '@angular/core';
import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';

@Component({
  selector: 'lab900-nav-list-example',
  template: '<lab900-nav-list [navItemGroups]="navItemGroups"></lab900-nav-list>',
})
export class NavListExampleComponent {
  public navItemGroups: NavItemGroup[] = [
    {
      icon: {
        name: 'home',
        position: 'right',
      },
      label: 'Nav group 1',
      items: [
        {
          label: 'External link',
          href: { url: 'https://www.google.be', target: '_blank' },
          icon: { name: 'open_in_new', position: 'right' },
        },
        {
          label: 'External link',
          href: { url: 'https://www.google.be', target: '_self' },
        },
        {
          icon: {
            name: 'edit',
          },
          label: 'Sub level',
          children: [
            {
              icon: {
                name: 'open_in_new',
                position: 'right',
              },
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
              href: { url: 'https://www.google.be', target: '_blank' },
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
