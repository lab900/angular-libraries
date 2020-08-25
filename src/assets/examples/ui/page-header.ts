import { Component } from '@angular/core';
import { PageHeaderAction, PageHeaderNavItem } from '@lab900/ui';

@Component({
  selector: 'lab900-page-header-example',
  template: ` <lab900-page-header [pageTitle]="pageTitle" [navItems]="navItems" [actions]="actions"></lab900-page-header>`,
})
export class PageHeaderExampleComponent {
  public pageTitle = 'Example page header';
  public navItems: PageHeaderNavItem[] = [
    {
      label: 'Tab 1',
      route: '',
    },
    {
      label: 'Tab 2',
      route: '',
    },
  ];

  public actions: PageHeaderAction[] = [
    {
      label: 'Cancel',
      action: () => console.log('cancel'),
      type: 'sub',
    },
    {
      label: 'Save',
      action: () => console.log('save'),
      type: 'main',
    },
  ];
}
