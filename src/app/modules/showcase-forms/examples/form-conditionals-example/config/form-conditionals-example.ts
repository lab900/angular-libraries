import { EditType, Form } from '@lab900/forms';

export const formConditionalsExample: Form = {
  fields: [
    {
      attribute: 'role',
      editType: EditType.Select,
      options: {
        colspan: 6,
        selectOptions: [
          { label: '', value: null },
          { label: 'user', value: 'user' },
          { label: 'administrator', value: 'administrator' },
        ],
      },
    },
    {
      attribute: '',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'country',
          editType: EditType.Select,
          options: {
            colspan: 6,
          },
          conditions: [
            {
              dependOn: 'role',
              enableIfHasValue: true,
              conditionalOptions: () => {
                return [
                  { label: 'belgium', value: 'BEL' },
                  { label: 'france', value: 'FRA' },
                  { label: 'germany', value: 'GER' },
                  { label: 'hide language', value: 'HIDE' },
                ];
              },
            },
          ],
        },
        {
          attribute: 'language',
          editType: EditType.Select,
          options: {
            colspan: 6,
          },
          conditions: [
            {
              dependOn: 'country',
              conditionalOptions: (country: string) => {
                switch (country) {
                  case 'BEL':
                    return [
                      { label: 'Dutch', value: 'NL' },
                      { label: 'French', value: 'FR' },
                      { label: 'German', value: 'DE' },
                    ];
                  case 'FRA':
                    return [{ label: 'French', value: 'FR' }];
                  case 'GER':
                    return [{ label: 'German', value: 'DE' }];
                }
              },
              hideIfEquals: (country: string) => country === 'HIDE',
            },
          ],
        },
        {
          attribute: 'favouriteFood',
          editType: EditType.Select,
          options: {
            colspan: 6,
          },
          conditions: [
            {
              dependOn: 'language',
              conditionalOptions: (language: string) => {
                switch (language) {
                  case 'NL':
                    return [{ label: 'Belgian Fries', value: 'fries' }];
                  case 'FRA':
                  case 'GER':
                    return [{ label: 'Bon Cuisine', value: 'bon' }];
                }
              },
            },
          ],
        },
      ],
    },
  ],
};
