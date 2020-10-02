import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lab900MergerComponent } from './components/merger/merger.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [Lab900MergerComponent],
  exports: [Lab900MergerComponent],
  imports: [CommonModule, MatProgressBarModule, TranslateModule, FlexLayoutModule, MatIconModule, MatRadioModule],
})
export class Lab900MergerModule {}
