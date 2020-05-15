import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lab900-unknown-field',
  template: ` <div>
    <p>Unknown schema:</p>
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
