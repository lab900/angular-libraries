import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavItemGroup } from 'projects/ui/src/lib/nav-list/models/nav-item.model';
import { showcaseFormsNavItems } from './modules/showcase-forms/showcase-forms.nav-items';
import { showcaseUiNavItems } from './modules/showcase-ui/showcase-ui.nav-items';
import { showcaseAdminNavItems } from './modules/showcase-admin/showcase-admin.nav-items';
import { TranslateService } from '@ngx-translate/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { repository } from '../../package.json';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'lab900-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  private unsub = new Subject<void>();
  public readonly languages = ['en', 'nl'];
  public readonly gitUrl = repository;
  public readonly navItemsGroups: NavItemGroup[] = [...showcaseFormsNavItems, ...showcaseUiNavItems, ...showcaseAdminNavItems];
  public language = 'en';
  public sideNavMode: MatDrawerMode = 'side';

  @ViewChild('drawer')
  private drawer: MatDrawer;

  public constructor(
    private translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private media: MediaObserver,
    private router: Router,
  ) {
    this.router.events.pipe(takeUntil(this.unsub)).subscribe((e) => {
      if (e instanceof NavigationEnd && this.drawer && this.sideNavMode === 'over') {
        this.drawer.close();
      }
    });

    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/github-logo.svg'));
    this.matIconRegistry.addSvgIcon('lab900', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/logo-duo-dark.svg'));
  }

  public ngOnInit(): void {
    this.language = this.translateService.currentLang;
    this.watchMedia();
  }

  public ngOnDestroy(): void {
    this.unsub.next();
    this.unsub.unsubscribe();
  }

  public languageChanged(language: string): void {
    this.translateService.use(language);
  }

  private watchMedia(): void {
    this.media
      .asObservable()
      .pipe(
        takeUntil(this.unsub),
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0]),
      )
      .subscribe((change: MediaChange) => {
        this.sideNavMode = ['xs', 'sm', 'md'].includes(change.mqAlias) ? 'over' : 'side';
      });
  }
}
