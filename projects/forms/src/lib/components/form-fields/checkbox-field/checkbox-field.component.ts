import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { FormField } from '../../../models/FormField';

@Component({
  selector: 'lab900-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.css'],
})
export class CheckboxFieldComponent extends FormComponent implements OnInit {
  @Input() schema: FormField;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
