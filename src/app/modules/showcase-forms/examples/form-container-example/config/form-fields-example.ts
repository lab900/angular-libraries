import { EditType, Form } from '@lab900/forms';
import { Observable } from 'rxjs';

export const formFieldsExample: Form = {
  fields: [
    /*    {
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
       },*/
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
            valuesFn: () =>
              new Observable((subscriber) => {
                setTimeout(
                  () =>
                    subscriber.next([
                      {
                        value: 'DUT',
                        label: 'Dutch',
                      },
                      {
                        value: 'ENG',
                        label: 'English',
                      },
                    ]),
                  3000,
                );
              }),
          },
        },
      ],
    },
  ],
};
