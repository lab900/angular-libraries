import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lab900DataListModule } from 'projects/ui/src/lib/data-list/data-list.module';
import { Lab900SharingModule } from 'projects/ui/src/lib/sharing/sharing.module';
import { Lab900TableModule } from 'projects/ui/src/lib/table/table.module';
import { Lab900PageHeaderModule } from 'projects/ui/src/lib/page-header/page-header.module';
import { AlertModule } from 'projects/ui/src/lib/alert/alert.module';
import { MomentsModule } from 'projects/ui/src/lib/moments/moments.module';

import { ShowcaseUiRoutingModule } from './showcase-ui-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataListExampleComponent } from './examples/data-list-example/data-list-example.component';
import { SharingExampleComponent } from './examples/sharing-example/sharing-example.component';
import { AlertsExampleComponent } from './examples/alerts-example/alerts-example.component';
import { NavListExampleComponent } from './examples/nav-list-example/nav-list-example.component';
import { PageHeaderExampleComponent } from './examples/page-header-example/page-header-example.component';
import { TableExampleComponent } from './examples/table-example/table-example.component';
import { PageHeaderParamsExampleComponent } from './examples/page-header-params-example/page-header-params-example.component';
import { MomentsExampleComponent } from './examples/moments-example/moments-example.component';
import { TranslateModule } from '@ngx-translate/core';

const examples = [
  SharingExampleComponent,
  DataListExampleComponent,
  AlertsExampleComponent,
  NavListExampleComponent,
  PageHeaderExampleComponent,
  PageHeaderParamsExampleComponent,
  TableExampleComponent,
  MomentsExampleComponent,
];

@NgModule({
  declarations: examples,
  imports: [
    CommonModule,
    ShowcaseUiRoutingModule,
    SharedModule,
    Lab900DataListModule,
    Lab900SharingModule,
    AlertModule,
    Lab900TableModule,
    Lab900PageHeaderModule,
    MomentsModule,
    TranslateModule,
  ],
})
export class ShowcaseUiModule {}
