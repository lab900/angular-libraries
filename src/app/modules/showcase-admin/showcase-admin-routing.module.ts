import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseRoute } from '../shared/models/showcase-route.model';
import { ShowcaseExample } from '../shared/models/showcase-example.model';
import { AdminPageExampleComponent } from './examples/admin-page/admin-page-example.component';
import { TranslatableAdminPageExampleComponent } from './examples/translatable-admin-page/translatable-admin-page-example.component';
import { ShowcaseHomeComponent } from '../shared/components/showcase-home/showcase-home.component';
import { showcaseAdminConfig } from './showcase-admin.constants';
import { showcaseAdminNavItems } from './showcase-admin.nav-items';
import { MarkdownPageComponent } from '../shared/components/markdown-page/markdown-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseHomeComponent,
    data: { config: showcaseAdminConfig, nav: showcaseAdminNavItems },
  },
  {
    path: 'getting-started',
    component: MarkdownPageComponent,
    data: { filePath: 'guides/admin/getting-started.md' },
  },
  new ShowcaseRoute('admin-page', 'Admin Page', [new ShowcaseExample(AdminPageExampleComponent, 'Admin Page', ['TS'], '')]),
  new ShowcaseRoute('translatable-admin-page', 'Translatable Admin Page', [
    new ShowcaseExample(TranslatableAdminPageExampleComponent, 'Translatable Admin Page', ['TS'], ''),
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseAdminRoutingModule {}
