import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BreadCrumbsComponent],
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [BreadCrumbsComponent],
})
export class BreadCrumbsModule {}
