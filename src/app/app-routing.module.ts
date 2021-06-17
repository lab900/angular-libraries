import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/pages/homepage/homepage.component';
import { showcaseUiConfig } from './modules/showcase-ui/showcase-ui.constants';
import { showcaseFormsConfig } from './modules/showcase-forms/showcase-forms.constants';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
