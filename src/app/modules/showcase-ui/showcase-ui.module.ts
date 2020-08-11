import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListPageComponent } from './pages/data-list-page/data-list-page.component';
import { SharingPageComponent } from './pages/sharing-page/sharing-page.component';

import { Lab900DataListModule } from 'projects/ui/src/lib/data-list/data-list.module';
import { Lab900SharingModule } from 'projects/ui/src/lib/sharing/sharing.module';

import { ShowcaseUiRoutingModule } from './showcase-ui-routing.module';

@NgModule({
  declarations: [DataListPageComponent, SharingPageComponent],
  imports: [CommonModule, ShowcaseUiRoutingModule, Lab900DataListModule, Lab900SharingModule],
})
export class ShowcaseUiModule {}
