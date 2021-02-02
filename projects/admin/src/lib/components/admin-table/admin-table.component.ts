import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SchemaField } from '../../models/schemaField';
import { Schema, SchemaConverter } from '../../models/schema';
import { Item, Page } from '../../models/page';
import { Form } from '@lab900/forms';
import { MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'lab900-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent implements OnInit {
  @Input() loading = false;
  @Input() schema: Schema;
  @Input() data: Page<Item>;
  @Input() editHandler: (data: any) => Promise<boolean>;
  @Input() public dialogOptions: MatDialogConfig;

  @Output() edit: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() pageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  public headers: string[];
  public columns: SchemaField[];
  public displayedColumns: string[];
  public page = 1;
  public form: Form;

  get length() {
    return this.data?.items ? (this.data.hasMore ? this.page * this.data.items.length + 1 : this.page * this.data.items.length) : 0;
  }

  ngOnInit(): void {
    this.form = SchemaConverter.toForm(this.schema, false);
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
