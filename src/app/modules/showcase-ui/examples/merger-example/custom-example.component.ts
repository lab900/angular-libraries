import { Component } from '@angular/core';
import { CustomComponentAbstract } from '../../../../../../projects/ui/src/lib/merger/abstracts/custom-component.abstract';
import { MergerDataExample } from './models/merger-data-example.model';

@Component({
  selector: 'lab900-custom-component-example',
  template: `<div *ngIf="data">
    <p>{{ data.text }}</p>
  </div>`,
})
export class CustomExampleComponent extends CustomComponentAbstract<MergerDataExample> {}
