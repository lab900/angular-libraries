import { EditType, Form } from '@lab900/forms';

export const formFieldsExample: Form = {
  fields: [
    {
      attribute: '',
      title: 'GENERAL.PERSONAL_INFO',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'firstName',
          title: 'GENERAL.FIRST_NAME',
          editType: EditType.Input,
          options: {
            colspan: 6,
            required: true,
          },
        },
        {
          attribute: 'lastName',
          title: 'GENERAL.LAST_NAME',
          editType: EditType.Input,
          options: {
            colspan: 6,
            required: true,
          },
        },
        {
          attribute: 'birthday',
          title: 'GENERAL.BIRTHDAY',
          editType: EditType.Date,
          options: {
            colspan: 5,
            required: true,
          },
        },
        {
          attribute: 'gender',
          editType: EditType.ButtonToggle,
          options: {
            colspan: 5,
            values: [
              { value: 'male', icon: { svgName: 'male' } },
              { value: 'female', icon: { svgName: 'female' } },
              { value: 'other', icon: { svgName: 'male-female' } },
              { value: 'unknown', icon: { svgName: 'unknown' } },
            ],
          },
        },
        {
          attribute: 'nationality',
          title: 'GENERAL.NATIONALITY',
          editType: EditType.Input,
          options: {
            colspan: 5,
          },
        },
        {
          attribute: 'spokenLanguages',
          title: 'GENERAL.SPOKEN_LANGUAGES',
          editType: EditType.Input,
          options: {
            colspan: 5,
          },
        },
        {
          attribute: 'nationalInsuranceNumber',
          title: 'GENERAL.NATIONAL_INSURANCE_NUMBER',
          editType: EditType.Input,
          errorMessages: {
            pattern: 'ERRORS.INVALID.NATIONAL_INSURANCE_NUMBER',
          },
          options: {
            colspan: 5,
            pattern: new RegExp('^[0-9]{2}[.\\- ]{0,1}[0-9]{2}[.\\- ]{0,1}[0-9]{2}[.\\- ]{0,1}[0-9]{3}[.\\- ]{0,1}[0-9]{2}$'),
          },
        },
      ],
    },
    {
      attribute: '',
      title: 'GENERAL.CONTACT_INFO',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'tel1',
          title: 'GENERAL.PHONENR_1',
          editType: EditType.Input,
          options: {
            colspan: 5,
          },
        },
        {
          attribute: 'tel1',
          title: 'GENERAL.PHONENR_2',
          editType: EditType.Input,
          options: {
            colspan: 5,
          },
        },
        {
          attribute: 'email',
          title: 'GENERAL.EMAIL',
          editType: EditType.Input,
          options: {
            colspan: 5,
            type: 'email',
          },
        },
      ],
    },
    {
      attribute: '',
      title: 'GENERAL.CONTACT.MOMENTS',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'registrations',
          editType: EditType.Repeater,
          options: { removeAll: true },
          nestedFields: [
            {
              attribute: 'value',
              editType: EditType.Input,
              options: { readOnly: true, defaultValue: () => getFormattedDate(new Date(Date.now())) },
            },
          ],
        },
      ],
    },
    {
      attribute: '',
      title: 'GENERAL.EXTRA_COMMENTS',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'comments',
          editType: EditType.TextArea,
        },
      ],
    },
  ],
};

const getFormattedDate = (date: Date): string => {
  return `${digits(date.getDate())}/${digits(date.getMonth())}/${date.getFullYear()} - ${digits(date.getHours())}:${digits(
    date.getMinutes(),
  )}:${digits(date.getSeconds())}`;
};

const digits = (value: number): string => {
  return value > 10 ? `${value}` : `0${value}`;
};
