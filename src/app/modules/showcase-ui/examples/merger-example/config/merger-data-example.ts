import { MergeObject } from '../../../../../../../projects/ui/src/lib/merger/models/merge-object.model';
import { MergerDataExample } from '../models/merger-data-example.model';

export const mergerDataExample: MergeObject<MergerDataExample>[] = [
  {
    data: {
      name: 'Axelle',
      firstName: 'Red',
      address: {
        street: 'Examplestreet',
        number: 12,
      },
      languages: ['Nederlands', 'Frans'],
    },
    title: 'Axelle Red with a very long title that does not fit in the box ',
  },
  {
    data: {
      name: 'Axelle',
      firstName: 'Blue',
      address: {
        street: 'Examplestreet',
        number: 13,
      },
      languages: ['Frans', 'Nederlands'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum nunc vel convallis malesuada. Suspendisse at tristique tortor, id elementum odio.',
      dateOfBirth: new Date(),
    },
    title: 'Axelle Blue',
  },
];
