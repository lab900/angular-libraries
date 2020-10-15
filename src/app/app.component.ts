import { Component, OnInit } from '@angular/core';
import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';
import { showcaseFormsNavItems } from './modules/showcase-forms/showcase-forms.nav-items';
import { showcaseUiNavItems } from './modules/showcase-ui/showcase-ui.nav-items';
import { showcaseAdminNavItems } from './modules/showcase-admin/showcase-admin.nav-items';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { repository } from '../../package.json';

@Component({
  selector: 'lab900-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public readonly languages = ['en', 'nl'];
  public readonly gitUrl = repository;
  public readonly navItemsGroups: NavItemGroup[] = [...showcaseFormsNavItems, ...showcaseUiNavItems, ...showcaseAdminNavItems];
  public language = 'en';

  public constructor(
    private translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/github-logo.svg'));

    this.matIconRegistry.addSvgIcon('lab900', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/images/logo-duo-dark.svg'));
  }

  public ngOnInit(): void {
    this.language = this.translateService.currentLang;
  }

  public languageChanged(language: string) {
    this.translateService.use(language);
  }
}
