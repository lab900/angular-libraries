import { NgModule } from '@angular/core';
import { AngularAdminComponent } from './angular-admin.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [AngularAdminComponent, AdminPageComponent, AdminTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [AngularAdminComponent, AdminPageComponent]
})

export class AngularAdminModule { }
