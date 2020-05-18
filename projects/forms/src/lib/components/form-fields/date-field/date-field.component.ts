import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lib-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css'],
})
export class DateFieldComponent extends FormComponent implements OnInit {
  ngOnInit(): void {}
}
