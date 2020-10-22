import { Form, EditType } from '@lab900/forms';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

export const formFieldsExample: Form = {
  readonly: false,
  fields: [
    {
      editType: EditType.Row,
      nestedFields: [
        {
          title: 'name',
          attribute: 'name',
          editType: EditType.Input,
          options: {
            colspan: 6,
          },
        },
        {
          title: 'firstname',
          attribute: 'firstname',
          editType: EditType.Input,
          options: {
            colspan: 6,
          },
        },
      ],
    },
    {
      attribute: 'address',
      editType: EditType.Row,
      nestedFields: [
        {
          title: 'Street',
          attribute: 'street',
          editType: EditType.Input,
          options: {
            colspan: 6,
          },
        },
        {
          title: 'Number',
          attribute: 'number',
          editType: EditType.Input,
          options: {
            colspan: 6,
          },
        },
      ],
    },
    {
      editType: EditType.Row,
      nestedFields: [
        {
          title: 'country',
          attribute: 'country',
          editType: EditType.Select,
          options: {
            colspan: 12,
            selectOptions: of([
              {
                label: 'Belgium',
                value: 'BE',
              },
              {
                label: 'England',
                value: 'EN',
              },
            ]).pipe(delay(1000)),
          },
        },
        {
          title: 'languages',
          attribute: 'languages',
          editType: EditType.Select,
          conditions: [
            {
              dependOn: 'country',
              enableIfHasValue: true,
              conditionalOptions: (value: string) => {
                if (value) {
                  return of(value === 'BE' ? [{ label: 'Vlaams', value: 'VL' }] : [{ label: 'Engels', value: 'EN' }]).pipe(delay(5000));
                }
                return of([]);
              },
            },
          ],
          options: {
            colspan: 12,
          },
        },
        {
          title: 'dialects',
          attribute: 'dialects',
          editType: EditType.Select,
          conditions: [
            {
              dependOn: 'languages',
              enableIfHasValue: true,
              conditionalOptions: (value: string) => {
                if (value) {
                  return value === 'VL' ? [{ label: 'Antwerps', value: 'ANT' }] : [{ label: 'Brits', value: 'BR' }];
                }
                return [];
              },
            },
          ],
          options: {
            colspan: 12,
          },
        },
      ],
    },
  ],
};
