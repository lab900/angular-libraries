import { EditType, Form } from '@lab900/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const formFieldsExample: Form = {
  readonly: false,
  fields: [
    /*    {
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
    },*/
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
                  return of(
                    value === 'BE'
                      ? [
                          { label: 'Vlaams', value: 'VL' },
                          { label: 'Waals', value: 'WL' },
                        ]
                      : [{ label: 'Engels', value: 'EN' }],
                  ).pipe(delay(5000));
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
                  return value === 'VL' ? of([{ label: 'Antwerps', value: 'ANT' }]).pipe(delay(2000)) : [{ label: 'Brits', value: 'BR' }];
                }
                return [];
              },
            },
          ],
          options: {
            colspan: 12,
          },
        },
        {
          title: 'sub dialects',
          attribute: 'subDialects',
          editType: EditType.Select,
          conditions: [
            {
              dependOn: 'dialects',
              enableIfHasValue: true,
              conditionalOptions: (value: string) => {
                if (value) {
                  return value === 'ANT'
                    ? of([{ label: 'Plat antwerps', value: 'PLAT_ANT' }]).pipe(delay(2000))
                    : [{ label: 'Heel Brits', value: 'HEEL_BR' }];
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
