import { EditType } from '../../../../../../../projects/forms/src/lib/models/editType';
import { Form } from '../../../../../../../projects/forms/src/lib/models/Form';

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
  ],
};
