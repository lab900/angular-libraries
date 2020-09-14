import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { Lab900TableComponent } from './components/table/table.component';
import { Lab900TableEmptyDirective } from './directives/table-empty.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { Lab900TableDisabledDirective } from './directives/table-disabled.directive';

@NgModule({
  declarations: [Lab900TableComponent, Lab900TableEmptyDirective, Lab900TableDisabledDirective],
  exports: [Lab900TableComponent, Lab900TableEmptyDirective, Lab900TableDisabledDirective],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    TranslateModule,
    RouterModule,
    FlexLayoutModule,
  ],
})
export class Lab900TableModule {}
