import { Component } from '@angular/core';
import { MergeObject } from '../../../../../../projects/ui/src/lib/object-merger/models/merge-object.model';
import { MergeOption } from '../../../../../../projects/ui/src/lib/object-merger/models/merge-option.model';
import * as moment from 'moment';

@Component({
  selector: 'lab900-object-merger-example',
  template: `<lab900-object-merger [options]="options" [objectsToMerge]="example"></lab900-object-merger>`,
})
export class ObjectMergerExampleComponent {
  public example: MergeObject[] = [
    {
      data: {
        name: 'Axelle',
        firstName: 'Red',
        languages: ['Nederlands', 'Duits'],
      },
      title: 'Axelle Red',
    },
    {
      data: {
        name: 'Axelle',
        firstName: 'Blue',
        languages: ['Nederlands', 'Frans'],
        dateOfBirth: new Date(),
      },
      title: 'Axelle Blue',
    },
  ];

  public options: MergeOption[] = [
    {
      attribute: 'name',
      label: 'label.last-name',
    },
    {
      attribute: 'firstName',
      label: 'label.first-name',
    },
    {
      attribute: 'dateOfBirth',
      label: 'label.birthday',
      formatter: (data) => (data ? moment(data).format('DD/MM/YYYY') : ''),
    },
    {
      attribute: 'languages',
      label: 'language',
    },
  ];
}
