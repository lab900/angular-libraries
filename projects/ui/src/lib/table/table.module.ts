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
import { TableActionComponent } from './components/table-action/table-action.component';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [Lab900TableComponent, Lab900TableEmptyDirective, Lab900TableDisabledDirective, TableActionComponent],
  exports: [Lab900TableComponent, Lab900TableEmptyDirective, Lab900TableDisabledDirective],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    TranslateModule,
    RouterModule,
    FlexLayoutModule,
    MatMenuModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
})
export class Lab900TableModule {}
