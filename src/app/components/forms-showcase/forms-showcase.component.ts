import { Component, OnInit } from '@angular/core';
import { EditType } from '../../../../projects/model-driven-forms/src/lib/models/editType';
import { Form } from '../../../../projects/model-driven-forms/src/lib/models/Form';

@Component({
  selector: 'lab900-forms-showcase',
  templateUrl: './forms-showcase.component.html',
  styleUrls: ['./forms-showcase.component.scss'],
})
export class FormsShowcaseComponent implements OnInit {
  formSchema: Form;

  constructor() {
    this.formSchema = {
      title: 'First Name - Last Name',
      fields: [
        { attribute: 'first', editType: EditType.Input, title: 'First Name' },
        { attribute: 'last', editType: EditType.Input, title: 'Last Name' },
      ],
    };
  }

  ngOnInit(): void {}
}