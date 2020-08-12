import { NgModule } from '@angular/core';
import { AlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, TranslateModule],
  exports: [AlertComponent],
})
export class AlertModule {}
