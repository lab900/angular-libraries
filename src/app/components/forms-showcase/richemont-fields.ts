import { EditType } from '../../../../projects/forms/src/lib/models/editType';
import { Form } from '../../../../projects/forms/src/lib/models/Form';

export const richemontSchema: Form = {
  title: 'Enter your name.',
  fields: [
    {
      attribute: '',
      editType: EditType.Row,
      nestedFields: [
        { attribute: 'first', editType: EditType.Input, title: 'First Name', options: { colspan: 6 } },
        { attribute: 'last', editType: EditType.Input, title: 'Last Name', options: { colspan: 6, maxLength: 12 } },
      ],
    },
    {
      attribute: 'repeater',
      title: 'Add  something',
      editType: EditType.Repeater,
      nestedFields: [
        { attribute: '', editType: EditType.Input, title: 'First Name'},
      ],
    },
    {
      attribute: 'repeater2',
      title: 'Give 3 names',
      editType: EditType.Repeater,
      options: {
        fixedList: true,
        minRows: 3,
      },
      nestedFields: [
        {
          attribute: '',
          editType: EditType.Row,
          nestedFields: [
            { attribute: 'first', editType: EditType.Input, title: 'First Name', options: { colspan: 6 } },
            { attribute: 'last', editType: EditType.Input, title: 'Last Name', options: { colspan: 6, maxLength: 12 } },
          ],
        },
      ],
    },
  ],
};
