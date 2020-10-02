import { MergeConfig } from '../../../../../../../projects/ui/src/lib/merger/models/merge-config.model';
import * as moment from 'moment';

export const mergerSchemaExample: MergeConfig<any>[] = [
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
    formatter: (data) => data.join(', '),
  },
  {
    attribute: 'text',
    label: 'text',
    nextLine: true,
    active: true,
  },
];
