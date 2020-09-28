import { EditType } from '../../../../../../../projects/forms/src/lib/models/editType';
import { Form } from '../../../../../../../projects/forms/src/lib/models/Form';

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
            readonly: true,
          },
        },
        {
          attribute: 'name',
          title: 'GENERAL.LAST_NAME',
          editType: EditType.Input,
          options: {
            colspan: 6,
            required: true,
          },
        },
        {
          attribute: 'dateOfBirth',
          title: 'GENERAL.BIRTHDAY',
          editType: EditType.Date,
          options: {
            placeholder: 'DD/MM/YYYY',
            colspan: 5,
            required: true,
            startView: 'multi-year',
            maxDate: new Date(),
            readonlyDisplay: (data: any) => data?.dateOfBirth,
          },
        },
        {
          attribute: 'spokenLanguages',
          title: 'GENERAL.SPOKEN_LANGUAGES',
          editType: EditType.AutocompleteMultiple,
          options: {
            colspan: 10,
            // displayOptionFn: (languageOption: KeyTranslation) => (languageOption && languageOption.valueI18n) || '',
          },
        },
        {
          attribute: 'nationalities',
          title: 'GENERAL.NATIONALITIES',
          editType: EditType.AutocompleteMultiple,
          options: {
            colspan: 10,
            // displayOptionFn: (nationalityOption: KeyTranslation) => (nationalityOption && nationalityOption.valueI18n) || '',
          },
        },
        {
          attribute: 'nationalRegistrationNumber',
          title: 'GENERAL.NATIONAL_INSURANCE_NUMBER',
          editType: EditType.Input,
          options: {
            colspan: 5,
            mask: '00.00.00-000.00',
          },
        },
        {
          attribute: 'uniqueNumber',
          title: 'GENERAL.UNIQUE_ID',
          editType: EditType.Input,
          options: { colspan: 5, readonly: true },
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
          errorMessages: {
            pattern: 'GENERAL.ENTER.VALID.EMAIL',
          },
          options: {
            colspan: 5,
            type: 'email',
            pattern: new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
          },
        },
      ],
    },
    {
      attribute: '',
      title: 'GENERAL.ADDRESS.INFORMATION',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'country',
          title: 'GENERAL.COUNTRY',
          editType: EditType.Autocomplete,
          options: {
            colspan: 5,
            // displayOptionFn: (countryOption: KeyTranslation) => (countryOption && countryOption.valueI18n) || '',
          },
        },
        {
          attribute: 'street',
          title: 'GENERAL.STREET',
          editType: EditType.Input,
          options: { colspan: 5 },
        },
        {
          attribute: 'zip',
          title: 'GENERAL.ZIP',
          editType: EditType.Input,
          options: { colspan: 5, mask: '0*' },
        },
        {
          attribute: 'city',
          title: 'GENERAL.CITY',
          editType: EditType.Input,
          options: { colspan: 5 },
        },
        {
          attribute: 'incidentId',
          title: 'GENERAL.INCIDENT',
          editType: EditType.Select,
          options: {
            colspan: 10,
            required: true,
          },
        },
        {
          attribute: 'registrationPointType',
          title: 'GENERAL.REGISTRATION_POINT',
          editType: EditType.Select,
          options: {
            colspan: 5,
            hint: { value: 'GENERAL.SELECT_INCIDENT' },
            required: true,
            readonlyDisplay: () => 'test',
          },
        },
        {
          attribute: 'locationId',
          title: 'GENERAL.LOCATION',
          editType: EditType.Select,
          options: {
            colspan: 5,
            hint: { value: 'GENERAL.SELECT_REGISTRATION_POINT' },
            required: true,
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
          attribute: 'contactMoment',
          editType: EditType.Repeater,
          options: {
            removeAll: true,
            readonlyDisplay: (data: any) => {
              return (data?.registration || []).map((d) => d.value).join(', ');
            },
          },
          nestedFields: [
            {
              attribute: 'value',
              editType: EditType.Input,
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
          attribute: 'text',
          editType: EditType.TextArea,
        },
      ],
    },
  ],
};
