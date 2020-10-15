import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/pages/homepage/homepage.component';
import { showcaseUiConfig } from './modules/showcase-ui/showcase-ui.constants';
import { showcaseFormsConfig } from './modules/showcase-forms/showcase-forms.constants';
import { showcaseAdminConfig } from './modules/showcase-admin/showcase-admin.constants';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: showcaseFormsConfig?.homeRoute,
    loadChildren: () => import('./modules/showcase-forms/showcase-forms.module').then((m) => m.ShowcaseFormsModule),
  },
  {
    path: showcaseUiConfig?.homeRoute,
    loadChildren: () => import('./modules/showcase-ui/showcase-ui.module').then((m) => m.ShowcaseUiModule),
  },
  {
    path: showcaseAdminConfig?.homeRoute,
    loadChildren: () => import('./modules/showcase-admin/showcase-admin.module').then((m) => m.ShowcaseAdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
