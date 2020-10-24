import { EditType, Form } from '@lab900/forms';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';

const incidents = [
  {
    id: 1,
    name: 'x',
    areas: [
      { type: 'WELCOME', name: 'xxxx welcome', id: 1 },
      { type: 'CALLS', name: 'xxxx calls', id: 2 },
    ],
  },
];

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
                  return of(['WELCOME', 'CALLS'].map((v) => ({ value: v, label: v }))).pipe(delay(100));
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
              conditionalOptions: (value: string, currentControl: AbstractControl) => {
                if (value) {
                  const incidentId = currentControl.parent.get('incidentId').value;
                  const areas = incidents.find((i) => i.id === incidentId)?.areas;
                  return [...(areas || [])].filter((a) => a.type === value).map((i) => ({ value: i.id, label: i.name }));
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
