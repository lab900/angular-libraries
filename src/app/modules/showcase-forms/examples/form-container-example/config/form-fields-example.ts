import { Form, EditType } from '@lab900/forms';

export const formFieldsExample: Form = {
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
          conditions: [
            {
              dependOn: 'name',
              hideIfHasValue: true,
            },
            {
              dependOn: 'address.country',
              disableIfEquals: 'Belgium',
            },
            {
              dependOn: 'languages',
              onChangeFn: (value: string, fieldControl) => {
                fieldControl.setValue(value);
              },
            },
          ],
        },
      ],
    },
    {
      attribute: 'address',
      editType: EditType.Row,
      nestedFields: [
        {
          title: 'Country',
          attribute: 'country',
          editType: EditType.Input,
          options: {
            colspan: 12,
          },
        },
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
          title: 'languages',
          attribute: 'languages',
          editType: EditType.Select,
          options: {
            readonly: true,
            colspan: 12,
            selectOptions: [
              {
                label: 'Dutch',
                value: 'DUT',
              },
              {
                label: 'English',
                value: 'ENG',
              },
            ],
          },
        },
      ],
    },
  ],
};
