import { Component } from '@angular/core';
import { ObjectMergerObjects } from '../../../../../../projects/ui/src/lib/object-merger/models/object-merger-objects';

@Component({
  selector: 'lab900-object-merger-example',
  template: `<lab900-object-merger [objectsToMerge]="exampleObjects"></lab900-object-merger>`,
})
export class ObjectMergerExampleComponent {
  public exampleObjects: ObjectMergerObjects = {
    primary: {
      name: 'axelle',
      lastname: 'red',
    },
    primaryTitle: 'Axelle Red',
    secondary: {
      name: 'axelle',
      lastname: 'blue',
      favoriteFood: 'IceCream',
    },
    secondaryTitle: 'Axelle Blue',
  };
}
