import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseRoute } from '../shared/models/showcase-route.model';
import { ShowcaseExample } from '../shared/models/showcase-example.model';
import { SharingExampleComponent } from './examples/sharing-example/sharing-example.component';
import { DataListExampleComponent } from './examples/data-list-example/data-list-example.component';
import { AlertsExampleComponent } from './examples/alerts-example/alerts-example.component';
import { NavListExampleComponent } from './examples/nav-list-example/nav-list-example.component';
import { TableExampleComponent } from './examples/table-example/table-example.component';
import { PageHeaderExampleComponent } from './examples/page-header-example/page-header-example.component';

const routes: Routes = [
  new ShowcaseRoute('sharing', 'Sharing', [new ShowcaseExample(SharingExampleComponent, 'Sharing list', ['TS'], 'ui/sharing')]),
  new ShowcaseRoute('data-list', 'Data list', [new ShowcaseExample(DataListExampleComponent, 'Data list', ['TS'], 'ui/data-list')]),
  new ShowcaseRoute('alerts', 'Alerts', [new ShowcaseExample(AlertsExampleComponent, 'Alerts', ['TS'], 'ui/alerts')]),
  new ShowcaseRoute('nav-list', 'Nav list', [new ShowcaseExample(NavListExampleComponent, 'Nav list', ['TS'], 'ui/nav-list')]),
  new ShowcaseRoute('table', 'Table', [new ShowcaseExample(TableExampleComponent, 'Table', ['TS'], 'ui/table')]),
  new ShowcaseRoute('page-header', 'Page header', [
    new ShowcaseExample(PageHeaderExampleComponent, 'Page header', ['TS'], 'ui/page-header'),
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseUiRoutingModule {}
