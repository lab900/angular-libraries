import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Lab900ObjectMergerComponent } from './components/object-merger/object-merger.component';
import { SharedModule } from '../../../../../src/app/modules/shared/shared.module';
import { Lab900ObjectMergerRowComponent } from './components/object-merger-row/object-merger-row.component';

@NgModule({
  declarations: [Lab900ObjectMergerComponent, Lab900ObjectMergerRowComponent],
  exports: [Lab900ObjectMergerComponent],
  imports: [CommonModule, TranslateModule, FlexLayoutModule, SharedModule],
})
export class Lab900ObjectMergerModule {}
