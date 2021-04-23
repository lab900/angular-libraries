import { Component } from '@angular/core';
import { NavItemGroup } from '@lab900/ui';

@Component({
  selector: 'lab900-nav-list-example',
  template: '<div style="width: 300px"><lab900-nav-list [navItemGroups]="navItemGroups"></lab900-nav-list></div>',
})
export class NavListExampleComponent {
  public navItemGroups: NavItemGroup[] = [
    {
      items: [
        {
          label: 'Sub level 2',
          children: [
            {
              label: 'Actual link',
              href: { url: 'https://www.google.be', target: '_blank' },
            },
            {
              label: 'Nested sublevel',
              childrenInOverlay: true,
              children: [
                {
                  label: 'Actual link',
                  href: { url: 'https://www.google.be', target: '_blank' },
                },
                {
                  label: 'Actual link',
                  href: { url: 'https://www.google.be', target: '_blank' },
                },
                {
                  label: 'Actual link',
                  href: { url: 'https://www.google.be', target: '_blank' },
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
