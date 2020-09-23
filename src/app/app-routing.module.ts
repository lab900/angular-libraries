import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'forms',
    pathMatch: 'full',
  },
  {
    path: 'forms',
    loadChildren: () => import('./modules/showcase-forms/showcase-forms.module').then((m) => m.ShowcaseFormsModule),
  },
  {
    path: 'ui',
    loadChildren: () => import('./modules/showcase-ui/showcase-ui.module').then((m) => m.ShowcaseUiModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/showcase-admin/showcase-admin.module').then((m) => m.ShowcaseAdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
