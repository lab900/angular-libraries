import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MomentsComponent } from './components/moments/moments.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MomentsComponent],
  imports: [TranslateModule, MatIconModule, CommonModule, FlexModule],
  exports: [MomentsComponent],
})
export class MomentsModule {}
