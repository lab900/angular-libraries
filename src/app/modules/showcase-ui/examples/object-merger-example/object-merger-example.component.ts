import { Component } from '@angular/core';

@Component({
  selector: 'lab900-object-merger-example',
  template: `<lab900-object-merger [objectsToMerge]="exampleObjects"></lab900-object-merger>`,
})
export class ObjectMergerExampleComponent {
  public exampleObjects = {
    primary: {
      name: 'axelle',
      lastname: 'red',
      title: 'Axelle Red',
    },
    secondary: {
      name: 'axelle',
      lastname: 'blue',
      favoriteFood: 'IceCream',
      title: 'Axelle Blue',
    },
  };
}
