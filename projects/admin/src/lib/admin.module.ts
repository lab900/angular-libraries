import { NgModule } from '@angular/core';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DateDisplayComponent } from './components/date-display/date-display.component';
import { ImageDisplayComponent } from './components/image-display/image-display.component';
import { MatCardModule } from '@angular/material/card';
import { AdminTableCellComponent } from './components/admin-table-cell/admin-table-cell.component';
import { CheckboxDisplayComponent } from './components/checkbox-display/checkbox-display.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Lab900FormsModule } from '@lab900/forms';
import { DialogModule } from '@lab900/ui';

@NgModule({
  declarations: [
    CheckboxDisplayComponent,
    AdminPageComponent,
    AdminTableComponent,
    DateDisplayComponent,
    ImageDisplayComponent,
    AdminTableCellComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    DialogModule,
    MatCheckboxModule,
    Lab900FormsModule.forRoot({
      formField: {
        appearance: 'outline',
      },
    }),
  ],
  exports: [AdminPageComponent],
})
export class AdminModule {}
