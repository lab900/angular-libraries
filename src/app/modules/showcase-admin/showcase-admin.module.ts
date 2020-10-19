import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseAdminRoutingModule } from './showcase-admin-routing.module';
import { AdminPageExampleComponent } from './examples/admin-page-example/admin-page-example.component';
import { AdminModule } from '../../../../projects/admin/src/lib/admin.module';
// tslint:disable-next-line:max-line-length
import { TranslatableAdminPageExampleComponent } from './examples/translatable-admin-page-example/translatable-admin-page-example.component';

@NgModule({
  declarations: [AdminPageExampleComponent, TranslatableAdminPageExampleComponent],
  imports: [CommonModule, ShowcaseAdminRoutingModule, AdminModule],
})
export class ShowcaseAdminModule {}
