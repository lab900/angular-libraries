import { EditType, Form } from '@lab900/forms';

export const formConditionalsExample: Form = {
  fields: [
    {
      attribute: 'list',
      editType: EditType.Select,
      options: {
        selectOptions: [
          { label: 'one', value: 'one' },
          { label: 'two', value: 'two' },
          { label: 'three', value: 'three' },
        ],
      },
    },
  ],
};
