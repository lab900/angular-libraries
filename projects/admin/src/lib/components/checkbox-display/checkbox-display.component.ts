import { Component, Input, OnInit } from '@angular/core';
import { SchemaField } from '../../models/schemaField';

@Component({
  selector: 'lab900-checkbox-display',
  templateUrl: './checkbox-display.component.html',
  styleUrls: ['./checkbox-display.component.css'],
})
export class CheckboxDisplayComponent implements OnInit {
  @Input() public fieldType: SchemaField;
  @Input() public data;

  constructor() {}

  public ngOnInit(): void {}
}
