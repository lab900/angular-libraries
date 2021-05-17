import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadCrumbsComponent],
  imports: [CommonModule, RouterModule],
  exports: [BreadCrumbsComponent],
})
export class BreadCrumbsModule {}
