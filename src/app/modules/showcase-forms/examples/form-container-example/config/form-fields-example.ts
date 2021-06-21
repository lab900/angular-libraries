import { Form, EditType } from '@lab900/forms';

export const formFieldsExample: Form = {
  fields: [
    {
      attribute: 'fullName',
      editType: EditType.Row,
      nestedFields: [
        {
          title: 'name',
          attribute: 'name',
          editType: EditType.Input,
          options: {
            colspan: 6,
            required: true,
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
            readonly: true,
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
                value: 'Dutch',
                label: 'DUT',
              },
              {
                value: 'English',
                label: 'ENG',
              },
            ],
          },
        },
      ],
    },
  ],
};
