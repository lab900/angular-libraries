import { Component } from '@angular/core';

@Component({
  selector: 'lab900-object-merger-example',
  template: `<lab900-object-merger [objectsToMerge]="exampleObjects"></lab900-object-merger>`,
})
export class ObjectMergerExampleComponent {
  public exampleObjects = {
    primary: {
      name: 'axelle',
      birthday: new Date(),
      lastname: 'red',
    },
    secondary: {
      name: 'axelle',
      birthday: new Date(),
      lastname: 'blue',
      favoriteFood: 'IceCream',
    },
  };
}
