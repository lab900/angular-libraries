import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MomentChipComponent } from './components/moment-chip/moment-chip.component';
import { MomentContainerComponent } from './components/moment-container/moment-container.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MomentChipComponent, MomentContainerComponent],
  imports: [TranslateModule, MatIconModule, CommonModule, FlexModule],
  exports: [MomentChipComponent, MomentContainerComponent],
})
export class MomentsModule {}
