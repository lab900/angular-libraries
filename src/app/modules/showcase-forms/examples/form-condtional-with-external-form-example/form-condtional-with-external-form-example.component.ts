import { Component } from '@angular/core';
import { EditType, Form } from '@lab900/forms';

@Component({
  selector: 'lab900-form-conditional-with-external-form-example',
  template: `
    <h2>Form 1</h2>
    <lab900-form #form1 [schema]="schema"></lab900-form>
    <h2>Form 2</h2>
    <lab900-form #form2 [schema]="schema2" [externalForms]="{ form1: form1.form }"></lab900-form>
  `,
})
export class FormCondtionalWithExternalFormExampleComponent {
  public schema: Form = {
    fields: [
      {
        attribute: 'type',
        editType: EditType.Select,
        title: 'Type',
        options: {
          colspan: 6,
          selectOptions: [
            { value: 'a', label: 'a value' },
            { value: 'b', label: 'b value' },
          ],
        },
      },
    ],
  };
  public schema2: Form = {
    fields: [
      {
        attribute: 'name',
        editType: EditType.Input,
        title: 'Type',
        conditions: [
          {
            dependOn: 'type',
            disableIfEquals: 'a',
            externalFormId: 'form1',
          },
        ],
      },
    ],
  };
}
