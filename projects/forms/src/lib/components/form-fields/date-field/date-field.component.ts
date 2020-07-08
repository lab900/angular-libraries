import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.css'],
})
export class DateFieldComponent extends FormComponent implements OnInit {
  constructor(translateService: TranslateService) {
    super(translateService);
  }

  ngOnInit(): void {}
}
