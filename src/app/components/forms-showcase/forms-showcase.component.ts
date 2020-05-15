import { Component, OnInit } from '@angular/core';
import { EditType } from '../../../../projects/forms/src/lib/models/editType';
import { Form } from '../../../../projects/forms/src/lib/models/Form';
import { FormSubmit } from '../../../../projects/forms/src/lib/models/FormSubmit';

@Component({
  selector: 'lab900-forms-showcase',
  templateUrl: './forms-showcase.component.html',
  styleUrls: ['./forms-showcase.component.scss'],
})
export class FormsShowcaseComponent implements OnInit {
  formSchema: Form;

  constructor() {
    this.formSchema = {
      title: 'Enter your name.',
      fields: [
        { attribute: 'first', editType: EditType.Input, title: 'First Name', options: { required: true } },
        { attribute: 'last', editType: EditType.Input, title: 'Last Name', options: { required: true } },
      ],
    };
  }

  log(event: FormSubmit<{ first: string; last: string }> | boolean) {
    console.log(event);
  }

  ngOnInit(): void {}
}
