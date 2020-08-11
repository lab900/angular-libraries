import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataListPageComponent } from './pages/data-list-page/data-list-page.component';
import { SharingPageComponent } from './pages/sharing-page/sharing-page.component';

const routes: Routes = [
  {
    path: 'data-list',
    component: DataListPageComponent,
  },
  {
    path: 'sharing',
    component: SharingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowcaseUiRoutingModule {}
