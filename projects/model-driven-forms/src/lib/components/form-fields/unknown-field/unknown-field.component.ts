import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lib-unknown-field',
  template: `<div>
    <p>Without JSON pipe:</p>
    <pre>{{ schema }}</pre>
    <p>With JSON pipe:</p>
    <pre>{{ schema | json }}</pre>
  </div>`,
  styles: [''],
})
export class UnknownFieldComponent extends FormComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
