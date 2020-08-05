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
      attribute: 'email',
      editType: EditType.Input,
      title: 'Email',
      options: {
        required: false,
        pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        patternTitle: 'email address',
      },
    },
    { attribute: 'number', editType: EditType.Input, title: 'Number', options: { type: 'number', required: true, min: 3 } },
    { attribute: 'file', editType: EditType.File, title: 'Attachment', options: { required: true } },
    { attribute: 'postedOn', editType: EditType.Date, title: 'Posted On', options: { required: true } },
    { attribute: 'published', editType: EditType.Checkbox, title: 'Published', options: { required: true } },
    {
      attribute: 'pizzaToppings',
      editType: EditType.Select,
      title: 'Pizza toppings',
      options: {
        required: true,
        multiple: true,
        values: [
          { key: 'cheese', value: 'Cheese' },
          { key: 'tomato', value: 'Tomato' },
        ],
      },
    },
    {
      attribute: 'content',
      editType: EditType.Wysiwyg,
      title: 'Message',
      options: {
        colspan: 2,
        required: true,
        editorConfig: {
          uploadUrl: 'https://europe-west1-tournamentcenter-tools-dev.cloudfunctions.net/imageUpload',
          uploadWithCredentials: true,
        },
      },
    },
  ],
};