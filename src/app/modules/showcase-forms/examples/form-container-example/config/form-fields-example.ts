import { Lab900FormConfig, EditType } from '@lab900/forms';

export const formFieldsExample: Lab900FormConfig = {
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
            infoTooltip: {
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id magna et mauris imperdiet imperdiet. Praesent sit amet luctus nulla, vel consequat diam. Fusce luctus mauris mollis justo efficitur, sed posuere purus tempor. Morbi a lectus convallis, interdum sapien nec, finibus enim. Mauris sollicitudin condimentum gravida. Morbi convallis sed ligula eu imperdiet. Praesent tincidunt turpis ut eros placerat, a facilisis nisi volutpat. Cras nisl augue, faucibus eu felis ut, pellentesque sollicitudin risus. Nam feugiat eu risus at volutpat. Nam rutrum finibus lectus id scelerisque. Integer vel feugiat est. Vivamus ipsum mi, pulvinar vitae purus quis, condimentum pellentesque lacus. Nulla facilisi. Donec nec elit tortor. Nunc id placerat mauris, sed placerat purus.',
            },
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
    {
      editType: EditType.Row,
      nestedFields: [
        {
          title: 'languages',
          attribute: 'languages',
          editType: EditType.Select,
          options: {
            infoTooltip: { text: 'dlfdsjflk klsdfjsd kjdfl sdjf ds' },
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
        {
          title: 'Remark',
          attribute: 'remark',
          editType: EditType.TextArea,
          options: {
            colspan: 12,
            infoTooltip: { text: 'dlfdsjflk klsdfjsd kjdfl sdjf ds' },
          },
        },
      ],
    },
  ],
};
