import { Component } from '@angular/core';
import { PageHeaderNavItem } from 'projects/ui/src/lib/page-header/models/page-header-nav.model';
import { ActionButton } from 'projects/ui/src/lib/button/models/action-button.model';

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

  public actions: ActionButton[] = [
    {
      label: 'Cancel',
      prefixIcon: 'edit',
      action: () => console.log('cancel'),
      type: 'stroked',
    },
    {
      label: 'Save',
      suffixIcon: 'keyboard_arrow_down',

      action: () => console.log('save'),
      type: 'flat',
    },
  ];
}
