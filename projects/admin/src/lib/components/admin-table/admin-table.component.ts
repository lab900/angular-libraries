import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SchemaField } from '../../models/schemaField';
import { Form } from '@lab900/forms';
import { Schema } from '../../models/schema';

@Component({
  selector: 'lab900-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent implements OnInit {
  @Input() loading = false;
  @Input() schema: Schema;
  @Input() editForm: Form;
  @Input() data: any[];
  @Input() editHandler: (data: any) => Promise<boolean>;

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() pageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  public headers: string[];
  public columns: SchemaField[];
  public displayedColumns: string[];

  ngOnInit(): void {
    this.columns = this.schema.fields.filter((value) => !value.overviewOptions?.hide).map((value, index) => value);
    this.displayedColumns = this.schema.fields.filter((value) => !value.overviewOptions?.hide).map((value, index) => value.attribute);
    if (this.schema.editable) {
      this.displayedColumns.push('edit');
    }
    if (this.schema.deletable) {
      this.displayedColumns.push('delete');
    }
  }
}
