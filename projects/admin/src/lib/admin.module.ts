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
import { FormsModule } from '@lab900/forms';

@NgModule({
  declarations: [AdminPageComponent, AdminTableComponent, DateDisplayComponent, ImageDisplayComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
  ],
  exports: [AdminPageComponent],
})
export class AdminModule {}
