import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lab900PageHeaderComponent } from './components/page-header/page-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [Lab900PageHeaderComponent],
  exports: [Lab900PageHeaderComponent],
  imports: [CommonModule, TranslateModule, RouterModule, MatTabsModule, MatButtonModule, FlexLayoutModule],
})
export class Lab900PageHeaderModule {}
