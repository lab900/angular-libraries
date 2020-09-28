import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Lab900ObjectMergerComponent } from './components/object-merger/object-merger.component';

@NgModule({
  declarations: [Lab900ObjectMergerComponent],
  exports: [Lab900ObjectMergerComponent],
  imports: [CommonModule, TranslateModule, FlexLayoutModule],
})
export class Lab900ObjectMergerModule {}
