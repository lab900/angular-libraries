import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MomentChipComponent } from './components/moment-chip/moment-chip.component';
import { MomentContainerComponent } from './components/moment-container/moment-container.component';

@NgModule({
  declarations: [MomentChipComponent, MomentContainerComponent],
  imports: [TranslateModule],
  exports: [MomentChipComponent, MomentContainerComponent],
})
export class MomentsModule {}
