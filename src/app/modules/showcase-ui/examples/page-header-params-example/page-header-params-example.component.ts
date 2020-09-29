import { Component } from '@angular/core';
import { PageHeaderNavItem } from 'projects/ui/src/lib/page-header/models/page-header-nav.model';
import { ActionButton } from 'projects/ui/src/lib/button/models/action-button.model';

@Component({
  selector: 'lab900-page-header-params-example',
  template: `<lab900-page-header [pageTitle]="pageTitle" [navItems]="navItems" [actions]="actions"></lab900-page-header>`,
})
export class PageHeaderParamsExampleComponent {
  public pageTitle = 'Example page header';

  public navItems: PageHeaderNavItem[] = [
    {
      label: 'Tab 1',
      queryParams: {
        page: 'tab1',
      },
    },
    {
      label: 'Tab 2',
      queryParams: {
        page: 'tab2',
      },
    },
  ];

  public actions: ActionButton[] = [
    {
      label: 'Cancel',
      action: () => console.log('cancel'),
      type: 'flat',
    },
    {
      label: 'Save',
      action: () => console.log('save'),
      type: 'flat',
      subActions: [
        {
          label: 'Cancel sub',
          action: () => console.log('cancel this'),
        },
      ],
    },
  ];
}
