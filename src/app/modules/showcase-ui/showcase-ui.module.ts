import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataListPageComponent } from './pages/data-list-page/data-list-page.component';

import { Lab900NavListModule } from 'projects/ui/src/lib/nav-list/nav-list.module';
import { Lab900DataListModule } from 'projects/ui/src/lib/data-list/data-list.module';

import { ShowcaseUiRoutingModule } from './showcase-ui-routing.module';

@NgModule({
  declarations: [DataListPageComponent],
  imports: [CommonModule, ShowcaseUiRoutingModule, Lab900DataListModule],
})
export class ShowcaseUiModule {}
