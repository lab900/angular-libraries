import { MergeConfig } from '../../../../../../../projects/ui/src/lib/merger/models/merge-config.model';
import * as moment from 'moment';
import { of } from 'rxjs';
import { Lab900CustomCmponentExample } from './custom-component-example.component';

export const mergerSchemaExample: MergeConfig[] = [
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
    formatter: (data) => of(data.sort().join(', ')),
  },
  {
    attribute: 'text',
    label: 'text',
    nextLine: true,
    active: true,
    component: Lab900CustomCmponentExample,
  },
];
