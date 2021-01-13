import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from './components/icon/icon.component';
import { FlexModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavListComponent, NavItemComponent, IconComponent],
  imports: [CommonModule, MatListModule, TranslateModule, FlexModule, MatIconModule, RouterModule],
  exports: [NavListComponent, IconComponent],
})
export class Lab900NavListModule {}
