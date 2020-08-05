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
  published: true,
};

@Component({
  selector: 'lab900-forms-showcase',
  templateUrl: './forms-showcase.component.html',
  styleUrls: ['./forms-showcase.component.scss'],
})
export class FormsShowcaseComponent implements OnInit {
  formSchema: Form;
  formSchema2Columns: Form;
  formSchema3Columns: Form;
  exampleData: any;

  constructor() {
    this.formSchema = {
      title: 'Enter your name.',
      columns: 1,
      fields: [
        { attribute: 'first', editType: EditType.TextArea, title: 'First Name', options: { hide: false } },
        { attribute: 'last', editType: EditType.Input, title: 'Last Name', options: { required: true, maxLength: 12 } },
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

    this.formSchema2Columns = { ...this.formSchema, columns: 2 };
    this.formSchema3Columns = { ...this.formSchema, columns: 3 };
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
