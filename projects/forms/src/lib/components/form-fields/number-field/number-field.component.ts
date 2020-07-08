import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.css'],
})
export class NumberFieldComponent extends FormComponent implements OnInit {
  constructor(translateService: TranslateService) {
    super(translateService);
  }

  ngOnInit(): void {}
}
