import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab900-custom-component-example',
  template: `<div>
    <p>{{ value }}</p>
  </div>`,
})
export class Lab900CustomCmponentExample {
  @Input()
  public value: string;
}
