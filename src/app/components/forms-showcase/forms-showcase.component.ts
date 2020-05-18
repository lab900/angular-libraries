import { Component, OnInit } from '@angular/core';
import { EditType } from '../../../../projects/forms/src/lib/models/editType';
import { Form } from '../../../../projects/forms/src/lib/models/Form';
import { FormSubmit } from '../../../../projects/forms/src/lib/models/FormSubmit';

const EXAMPLE_DATA = { last: 'Cosemans', first: 'Johan' };

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
        { attribute: 'first', editType: EditType.Input, title: 'First Name', options: { required: true } },
        { attribute: 'last', editType: EditType.Input, title: 'Last Name', options: { required: true } },
      ],
    };
    this.exampleData = EXAMPLE_DATA;
  }

  submitForm(data: any): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      console.log('Submitted');
      console.log(data);
      setTimeout(() => resolve(true), 1000);
    });
  }

  log(event: FormSubmit<{ first: string; last: string }> | boolean) {
    console.log(event);
  }

  ngOnInit(): void {}
}
