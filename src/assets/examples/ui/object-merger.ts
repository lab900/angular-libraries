import { Component } from '@angular/core';
import { MergeObject } from '../../../../../../projects/ui/src/lib/object-merger/models/merge-object.model';
import { MergeOption } from '../../../../../../projects/ui/src/lib/object-merger/models/merge-option.model';

@Component({
  selector: 'lab900-object-merger-example',
  template: `<lab900-object-merger [options]="options" [objectsToMerge]="objects"></lab900-object-merger>`,
})
export class ObjectMergerExampleComponent {
  public objects: { primary: MergeObject; secondary: MergeObject } = {
    primary: {
      data: {
        name: 'Axelle',
        lastname: 'Red',
      },
      title: 'Axelle Red',
    },
    secondary: {
      data: {
        name: 'Axelle',
        lastname: 'Blue',
        favoriteFood: 'IceCream',
      },
      title: 'Axelle Blue',
    },
  };

  public options: MergeOption[] = [
    {
      attribute: 'name',
      label: 'Name',
    },
    {
      attribute: 'lastname',
      label: 'Lastname',
      formatter: (data) => `${data} formatter works`,
    },
    {
      attribute: 'favoriteFood',
      label: 'Favorite food',
    },
  ];
}
