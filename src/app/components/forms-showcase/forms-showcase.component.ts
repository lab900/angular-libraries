import { Component, OnInit } from '@angular/core';
import { EditType } from '../../../../projects/forms/src/lib/models/editType';
import { Form } from '../../../../projects/forms/src/lib/models/Form';
import { FormSubmit } from '../../../../projects/forms/src/lib/models/FormSubmit';

const EXAMPLE_DATA = {
  last: 'Cosemans',
  first: 'Johan',
  pizzaToppings: ['cheese'],
  number: 3,
  postedOn: new Date(),
  content: '<strong>hello</strong> world',
};

@Component({
  selector: 'lab900-forms-showcase',
  templateUrl: './forms-showcase.component.html',
  styleUrls: ['./forms-showcase.component.scss'],
})
export class FormsShowcaseComponent implements OnInit {
  formSchema: Form;
  exampleData: any;

  constructor() {
    this.formSchema = {
      title: 'Enter your name.',
      fields: [
        { attribute: 'first', editType: EditType.Input, title: 'First Name', options: { hide: true } },
        { attribute: 'last', editType: EditType.Input, title: 'Last Name', options: { required: true } },
        { attribute: 'number', editType: EditType.Number, title: 'Number', options: { required: true } },
        { attribute: 'file', editType: EditType.File, title: 'Attachment', options: { required: true } },
        { attribute: 'postedOn', editType: EditType.Date, title: 'Posted On', options: { required: true } },
        {
          attribute: 'pizzaToppings',
          editType: EditType.Select,
          title: 'Pizza toppings',
          options: {
            required: true,
            multiple: true,
            values: Promise.resolve([
              { key: 'cheese', value: 'Cheese' },
              { key: 'tomato', value: 'Tomato' },
            ]),
          },
        },
        {
          attribute: 'content',
          editType: EditType.Wysiwyg,
          title: 'Message',
          options: {
            required: true,
            editorConfig: {
              uploadUrl: 'https://europe-west1-tournamentcenter-tools-dev.cloudfunctions.net/imageUpload',
              uploadWithCredentials: true,
            },
          },
        },
      ],
    };
    this.exampleData = EXAMPLE_DATA;
  }

  submitForm(data: any): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      console.log(data);
      setTimeout(() => resolve(true), 1000);
    });
  }

  log(event: FormSubmit<{ first: string; last: string }> | boolean) {
    console.log(event);
  }

  ngOnInit(): void {}
}
