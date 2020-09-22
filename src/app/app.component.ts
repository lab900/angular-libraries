import { Component, OnInit } from '@angular/core';
import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';
import { showcaseFormsNavItems } from './modules/showcase-forms/showcase-forms.nav-items';
import { showcaseUiNavItems } from './modules/showcase-ui/showcase-ui.nav-items';
import { showcaseAdminNavItems } from './modules/showcase-admin/showcase-admin.nav-items';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public navItemsGroups: NavItemGroup[] = [...showcaseFormsNavItems, ...showcaseUiNavItems, ...showcaseAdminNavItems];

  languages = ['en', 'nl'];
  language = 'en';

  constructor(private translateService: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translateService.use('en');
  }

  ngOnInit(): void {
    this.language = this.translateService.currentLang;
  }

  languageChanged(language: string) {
    this.translateService.use(language);
  }
}
