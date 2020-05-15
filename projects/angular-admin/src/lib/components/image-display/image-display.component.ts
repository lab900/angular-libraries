import { Component, Input, OnInit } from '@angular/core';
import { SchemaField } from '../../models/schemaField';

@Component({
  selector: 'lab900-image-display',
  templateUrl: './image-display.component.html',
  styleUrls: ['./image-display.component.css'],
})
export class ImageDisplayComponent implements OnInit {
  @Input() fieldType: SchemaField;
  @Input() data;

  constructor() {}

  ngOnInit(): void {}
}
