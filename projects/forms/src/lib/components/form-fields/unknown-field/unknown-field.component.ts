import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-unknown-field',
  template: ` <div>
    <p>Unknown schema:</p>
    <pre>{{ schema | json }}</pre>
  </div>`,
  styles: [''],
})
export class UnknownFieldComponent extends FormComponent implements OnInit {
  constructor(translateService: TranslateService) {
    super(translateService);
  }

  ngOnInit(): void {}
}
