import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent extends FormComponent implements OnInit {
  constructor(translateService: TranslateService) {
    super(translateService);
  }

  ngOnInit(): void {}
}
