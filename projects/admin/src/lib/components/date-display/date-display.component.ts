import { Component, Input, OnInit } from '@angular/core';
import { SchemaField } from '../../models/schemaField';

@Component({
  selector: 'lab900-date-display',
  templateUrl: './date-display.component.html',
})
export class DateDisplayComponent implements OnInit {
  @Input() public fieldType: SchemaField;
  @Input() public data;

  constructor() {}

  public ngOnInit(): void {}
}
