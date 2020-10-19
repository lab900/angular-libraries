import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseRoute } from '../shared/models/showcase-route.model';
import { ShowcaseExample } from '../shared/models/showcase-example.model';
import { SharingExampleComponent } from './examples/sharing-example/sharing-example.component';
import { DataListExampleComponent } from './examples/data-list-example/data-list-example.component';
import { AlertsExampleComponent } from './examples/alerts-example/alerts-example.component';
import { NavListExampleComponent } from './examples/nav-list-example/nav-list-example.component';
import { TableExampleComponent } from './examples/table-example/table-example.component';
import { PageHeaderExampleComponent } from './examples/page-header-example/page-header-example.component';
import { PageHeaderParamsExampleComponent } from './examples/page-header-params-example/page-header-params-example.component';
import { MergerExampleComponent } from './examples/merger-example/merger-example.component';
import { ButtonExampleComponent } from './examples/button-example/button-example.component';
import { ShowcaseHomeComponent } from '../shared/components/showcase-home/showcase-home.component';
import { showcaseUiConfig } from './showcase-ui.constants';
import { showcaseUiNavItems } from './showcase-ui.nav-items';
import { MarkdownPageComponent } from '../shared/components/markdown-page/markdown-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseHomeComponent,
    data: { config: showcaseUiConfig, nav: showcaseUiNavItems },
  },
  {
    path: 'getting-started',
    component: MarkdownPageComponent,
    data: { filePath: 'guides/ui/getting-started.md' },
  },
  new ShowcaseRoute('sharing', 'Sharing', [new ShowcaseExample(SharingExampleComponent, 'Sharing list')]),
  new ShowcaseRoute('buttons', 'Buttons', [new ShowcaseExample(ButtonExampleComponent, 'Buttons')]),
  new ShowcaseRoute('data-list', 'Data list', [new ShowcaseExample(DataListExampleComponent, 'Data list')]),
  new ShowcaseRoute('alerts', 'Alerts', [new ShowcaseExample(AlertsExampleComponent, 'Alerts')]),
  new ShowcaseRoute('nav-list', 'Nav list', [new ShowcaseExample(NavListExampleComponent, 'Nav list')]),
  new ShowcaseRoute('table', 'Table', [new ShowcaseExample(TableExampleComponent, 'Table')]),
  new ShowcaseRoute('page-header', 'Page header', [
    new ShowcaseExample(PageHeaderParamsExampleComponent, 'Page header from request params'),
    new ShowcaseExample(PageHeaderExampleComponent, 'Page header'),
  ]),
  new ShowcaseRoute('merger', 'Merger', [new ShowcaseExample(MergerExampleComponent, 'Merger')]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseUiRoutingModule {}
