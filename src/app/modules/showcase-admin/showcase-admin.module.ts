import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseAdminRoutingModule } from './showcase-admin-routing.module';
import { AdminPageExampleComponent } from './examples/admin-page/admin-page-example.component';
import { AdminModule } from '../../../../projects/admin/src/lib/admin.module';

@NgModule({
  declarations: [AdminPageExampleComponent],
  imports: [CommonModule, ShowcaseAdminRoutingModule, AdminModule],
})
export class ShowcaseAdminModule {}
