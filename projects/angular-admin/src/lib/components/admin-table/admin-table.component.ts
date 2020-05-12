import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SchemaField } from '../../models/schemaField';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EditType } from '../../models/editType';

@Component({
  selector: 'lab900-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent implements OnInit {

  @Input() fields: SchemaField[];
  @Input() data: any[];

  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  public readonly Wysiwyg = EditType.Wysiwyg
  public readonly Date = EditType.Date
  public readonly Input = EditType.Input
  public readonly Checkbox = EditType.Checkbox
  public readonly TextArea = EditType.TextArea

  public headers: string[];
  public columns: SchemaField[];
  public displayedColumns: string[];


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.columns = this.fields.filter(value => value.showInOverview).map((value,index) => value);
    this.displayedColumns = this.fields.filter(value => value.showInOverview).map((value,index) => value.attribute);
    this.displayedColumns.push('edit');
    this.displayedColumns.push('delete');
  }

}
