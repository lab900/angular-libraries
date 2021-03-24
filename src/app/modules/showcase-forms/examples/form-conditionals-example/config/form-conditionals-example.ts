import { EditType, Form } from '@lab900/forms';

export const formConditionalsExample: Form = {
  fields: [
    {
      attribute: '',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'country',
          editType: EditType.Select,
          options: {
            colspan: 6,
            selectOptions: [
              { label: 'belgium', value: 'BEL' },
              { label: 'france', value: 'FRA' },
              { label: 'germany', value: 'GER' },
              { label: 'hide language', value: 'HIDE' },
            ],
          },
        },
        {
          attribute: 'languages',
          editType: EditType.Select,
          options: {
            colspan: 6,
          },
          conditions: [
            {
              dependOn: 'country',
              conditionalOptions: (country: string) => {
                console.log(country);
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
      ],
    },
  ],
};
