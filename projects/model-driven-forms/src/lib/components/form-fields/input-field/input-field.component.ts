import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lib-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent extends FormComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}