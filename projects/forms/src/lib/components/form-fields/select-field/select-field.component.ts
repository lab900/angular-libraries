import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { FormField, SelectFieldOptions } from '../../../models/FormField';

@Component({
  selector: 'lab900-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css'],
})
export class SelectFieldComponent extends FormComponent implements OnInit {
  @Input() schema: FormField;

  public options: SelectFieldOptions;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.options = this.schema.options as SelectFieldOptions;
  }
}
