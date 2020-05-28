import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lab900-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css'],
})
export class NumberFieldComponent extends FormComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
