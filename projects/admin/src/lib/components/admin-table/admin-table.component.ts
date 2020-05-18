import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { SchemaField } from '../../models/schemaField';
import { EditType, Form } from '@lab900/forms';
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

  public readonly Wysiwyg = EditType.Wysiwyg;
  public readonly Date = EditType.Date;
  public readonly Input = EditType.Input;
  public readonly Checkbox = EditType.Checkbox;
  public readonly TextArea = EditType.TextArea;
  public readonly Image = EditType.Image;

  public headers: string[];
  public columns: SchemaField[];
  public displayedColumns: string[];

  ngOnInit(): void {
    this.columns = this.schema.fields.filter((value) => value.overviewOptions?.show).map((value, index) => value);
    this.displayedColumns = this.schema.fields.filter((value) => value.overviewOptions?.show).map((value, index) => value.attribute);
    this.displayedColumns.push('edit');
    this.displayedColumns.push('delete');
  }
}
