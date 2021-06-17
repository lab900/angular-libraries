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
import { OverlayModule } from '@angular/cdk/overlay';
import { NavItemButtonComponent } from './components/nav-item-button/nav-item-button.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [NavListComponent, NavItemComponent, IconComponent, NavItemButtonComponent],
  imports: [CommonModule, MatListModule, TranslateModule, FlexModule, MatIconModule, RouterModule, OverlayModule, MatMenuModule],
  exports: [NavListComponent, IconComponent],
})
export class Lab900NavListModule {}
