import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Lab900ObjectMergerComponent } from './components/object-merger/object-merger.component';
import { Lab900ObjectMergerRowComponent } from './components/object-merger-row/object-merger-row.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [Lab900ObjectMergerComponent, Lab900ObjectMergerRowComponent],
  exports: [Lab900ObjectMergerComponent],
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MatRadioModule, MatIconModule],
})
export class Lab900ObjectMergerModule {}
