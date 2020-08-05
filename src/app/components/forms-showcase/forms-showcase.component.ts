import { Component } from '@angular/core';
import { Form } from '../../../../projects/forms/src/lib/models/Form';
import { FormSubmit } from '../../../../projects/forms/src/lib/models/FormSubmit';
import { richemontSchema } from './richemont-fields';

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
export class FormsShowcaseComponent {
  formSchema: Form = richemontSchema;
  exampleData: any;

  submitForm(data: any): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      console.log(data);
      setTimeout(() => resolve(true), 1000);
    });
  }

  log(event: FormSubmit<{ first: string; last: string }> | boolean) {
    console.log(event);
  }
}
