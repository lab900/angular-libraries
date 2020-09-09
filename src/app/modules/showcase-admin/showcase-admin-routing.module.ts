import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseRoute } from '../shared/models/showcase-route.model';
import { ShowcaseExample } from '../shared/models/showcase-example.model';
import { AdminPageExampleComponent } from './examples/admin-page/admin-page-example.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin-page',
    pathMatch: 'full',
  },
  new ShowcaseRoute('admin-page', 'Admin Page', [new ShowcaseExample(AdminPageExampleComponent, 'Admin Page', ['TS'], '')]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseAdminRoutingModule {}
