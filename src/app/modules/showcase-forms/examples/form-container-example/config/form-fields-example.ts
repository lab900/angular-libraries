import { EditType, Form } from '@lab900/forms';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

const incidents = [
  {
    id: 1,
    name: 'x',
    areas: [
      { type: 'WELCOME', name: 'xxxx', id: 1 },
      { type: 'CALL', name: 'xxxx', id: 2 },
    ],
  },
];

let areas;

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
          title: 'incidentId',
          attribute: 'incidentId',
          editType: EditType.Select,
          options: {
            colspan: 12,
            selectOptions: of(incidents.map((i) => ({ value: i.id, label: i.name }))).pipe(delay(100)),
          },
        },
        {
          title: 'registerPoint',
          attribute: 'registerPoint',
          editType: EditType.Select,
          conditions: [
            {
              dependOn: 'incidentId',
              enableIfHasValue: true,
              conditionalOptions: (value: number) => {
                if (value) {
                  return of(['WELCOME', 'CALLS'].map((v) => ({ value: v, label: v }))).pipe(
                    delay(100),
                    tap((_) => (areas = incidents[0].areas)),
                  );
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
          title: 'locationId',
          attribute: 'locationId',
          editType: EditType.Select,
          conditions: [
            {
              dependOn: 'registerPoint',
              enableIfHasValue: true,
              conditionalOptions: (value: number) => {
                if (value) {
                  return areas || [];
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
