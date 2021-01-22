import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Lab900ButtonComponent } from './components/button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { Lab900ActionButtonComponent } from './components/action-button/lab900-action-button.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Lab900ActionButtonMenuComponent } from './components/action-button-menu/lab900-action-button-menu.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Lab900ActionButtonToggleComponent } from './components/action-button-toggle/lab900-action-button-toggle.component';

@NgModule({
  declarations: [Lab900ButtonComponent, Lab900ActionButtonToggleComponent, Lab900ActionButtonComponent, Lab900ActionButtonMenuComponent],
  exports: [Lab900ButtonComponent, Lab900ActionButtonComponent, MatButtonModule],
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule, TranslateModule, MatTooltipModule, MatButtonToggleModule],
})
export class Lab900ButtonModule {}
