import { Component, EventEmitter, OnInit } from '@angular/core';
import { EditType } from '../../../../projects/forms/src/lib/models/editType';
import { Form } from '../../../../projects/forms/src/lib/models/Form';
import { FormSubmit } from '../../../../projects/forms/src/lib/models/FormSubmit';
import { TranslateService } from '@ngx-translate/core';

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
  languages = ['en', 'nl'];
  language = 'en';

  constructor(private translateService: TranslateService) {
    this.formSchema = {
      title: 'content.form-title',
      columns: 1,
      fields: [
        { attribute: 'first', editType: EditType.Input, title: 'label.first-name', options: { hide: false } },
        { attribute: 'last', editType: EditType.Input, title: 'label.last-name', options: { required: true, maxLength: 12 } },
        {
          attribute: 'email',
          editType: EditType.Input,
          title: 'label.email',
          options: {
            required: false,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            patternError: 'email-error',
          },
        },
        { attribute: 'number', editType: EditType.Number, title: 'label.number', options: { required: true, min: 3 } },
        { attribute: 'file', editType: EditType.File, title: 'label.attachment', options: { required: true } },
        { attribute: 'postedOn', editType: EditType.Date, title: 'label.posted-on', options: { required: true } },
        { attribute: 'published', editType: EditType.Checkbox, title: 'label.published', options: { required: true } },
        {
          attribute: 'agree',
          editType: EditType.Checkbox,
          title: 'label.must-agree',
          options: { required: true, pattern: /true/, patternError: 'label.pizza-error' },
        },
        {
          attribute: 'pizzaToppings',
          editType: EditType.Select,
          title: 'label.pizza-toppings',
          options: {
            required: true,
            multiple: true,
            values: [
              { key: 'cheese', value: 'label.cheese' },
              { key: 'tomato', value: 'label.tomato' },
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

  languageChanged(language: string) {
    this.translateService.use(language);
  }

  ngOnInit(): void {
    this.language = this.translateService.currentLang;
  }
}
