import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lab900MergerComponent } from './components/merger/merger.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { Lab900MergerItemComponent } from './components/merger-item/merger-item.component';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [Lab900MergerComponent, Lab900MergerItemComponent],
  exports: [Lab900MergerComponent],
  imports: [CommonModule, MatProgressBarModule, TranslateModule, MatIconModule, MatRadioModule, FlexModule],
})
export class Lab900MergerModule {}
