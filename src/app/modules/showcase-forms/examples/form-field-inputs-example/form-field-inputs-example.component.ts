import { Component } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';


export const jobInfoForm: Form = {
  fields: [
    {
      attribute: '',
      title: 'Salary insights',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'salary',
          title: '',
          editType: EditType.RangeSlider,
          options: {
            colspan: 12,
            min: 10000,
            max: 200000,
            steps: 1000,
          }
        },
      ],
    },
    {
      attribute: '',
      title: 'Faceted search for your hidden network',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'facetedSearch',
          title: '',
          editType: EditType.Input,
          options: { colspan: 12 }
        },
      ],
    },
    {
      attribute: '',
      title: 'Are you open to a sourcing jam?',
      editType: EditType.Row,
      nestedFields: [
        {
          attribute: 'openToSourcingJam',
          title: '',
          editType: EditType.RadioButtons,
          options: {
            colspan: 12,
            values: [
              { value: true, label: 'Yes'},
              { value: false, label: 'No'}
            ]
          }
        },
      ],
    },
    {
      attribute: 'silverMedalists',
      title: 'Present your past “silver medalists”',
      editType: EditType.Repeater,
      options: {
        addLabel: 'Add a silver medalists',
      },
      nestedFields: [
        {
          attribute: 'value',
          title: '',
          editType: EditType.Input,
        },
      ]
    },
  ]
};

@Component({
  selector: 'lab900-form-field-inputs-example',
  template: '<lab900-form-container [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldInputsExampleComponent {
  public formSchema: Form = jobInfoForm;
}
