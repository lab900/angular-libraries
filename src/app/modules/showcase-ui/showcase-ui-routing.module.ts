import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListPageComponent } from './pages/data-list-page/data-list-page.component';

const routes: Routes = [
  {
    path: 'data-list',
    component: DataListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseUiRoutingModule {}
