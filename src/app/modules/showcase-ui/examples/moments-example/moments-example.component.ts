import { Component } from '@angular/core';

@Component({
  selector: 'lab900-moments-example',
  template: `<lab900-moments [moments]="moments"></lab900-moments>`,
})
export class MomentsExampleComponent {
  public moments: Date[] = [new Date(Date.now()), new Date(Date.now())];
}
