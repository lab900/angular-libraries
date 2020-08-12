import { Component, ViewChild } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';
import { FormContainerComponent } from 'projects/forms/src/lib/components/form-container/form-container.component';

@Component({
  selector: 'lab900-form-field-repeater-example',
  template: '<lab900-form-container [schema]="formSchema" [data]="data"></lab900-form-container><button (click)="addData()">Add data</button>',
})
export class FormFieldRepeaterExampleComponent {

  @ViewChild(FormContainerComponent)
  public form: FormContainerComponent<any>;

  public data: any;

  public formSchema: Form = {
    fields: [
      {
        attribute: 'repeater',
        title: 'Add  something',
        editType: EditType.Repeater,
        nestedFields: [{ attribute: 'value', editType: EditType.Input, title: 'Repeated field' }],
      },
    ],
  };

  public addData() {
    this.data = {
      repeater: [{ value: 'dummy field' }, { value: 'dummy field 2' }, { value: 'dummy field 3' }],
    }
  }
}
