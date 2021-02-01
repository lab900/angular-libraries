import { Component, Input } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { AdminTableComponent } from '../admin-table/admin-table.component';

@Component({
  selector: 'lab900-translatable-admin-table',
  templateUrl: './translatable-admin-table.component.html',
  styleUrls: ['./translatable-admin-table.component.scss'],
})
export class TranslatableAdminTableComponent extends AdminTableComponent {
  @Input()
  public getHandler: (id: any, language: string) => Promise<any>;

  @Input()
  public dialogOptions: MatDialogConfig;
}
