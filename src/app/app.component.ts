import { Component } from '@angular/core';
import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';
import { showcaseFormsNavItems } from './modules/showcase-forms/showcase-forms.nav-items';
import { showcaseUiNavItems } from './modules/showcase-ui/showcase-ui.nav-items';
import { showcaseAdminNavItems } from './modules/showcase-admin/showcase-admin.nav-items';

@Component({
  selector: 'lab900-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public navItemsGroups: NavItemGroup[] = [...showcaseFormsNavItems, ...showcaseUiNavItems, ...showcaseAdminNavItems];
}
