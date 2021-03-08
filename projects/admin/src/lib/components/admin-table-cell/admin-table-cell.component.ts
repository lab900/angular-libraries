import { Component, Input, OnInit } from '@angular/core';
import { SchemaField } from '../../models/schemaField';
import { EditType } from '@lab900/forms';

@Component({
  selector: 'lab900-admin-table-cell',
  templateUrl: './admin-table-cell.component.html',
  styleUrls: ['./admin-table-cell.component.scss'],
})
export class AdminTableCellComponent implements OnInit {
  @Input() public column: SchemaField;
  @Input() public row: any;

  public readonly Wysiwyg = EditType.Wysiwyg;
  public readonly Date = EditType.Date;
  public readonly Input = EditType.Input;
  public readonly Checkbox = EditType.Checkbox;
  public readonly TextArea = EditType.TextArea;
  public readonly Image = EditType.Image;

  constructor() {}

  public ngOnInit(): void {}
}
