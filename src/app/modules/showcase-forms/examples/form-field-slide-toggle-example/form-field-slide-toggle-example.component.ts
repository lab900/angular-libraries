import { Component, ViewChild } from '@angular/core';
import { EditType, Lab900FormConfig, Lab900Form } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-slide-toggle-example',
  template: '<lab900-form [schema]="formSchema" (click)="logValue()" [data]="formData"></lab900-form>',
})
export class FormFieldSlideToggleExampleComponent {
  @ViewChild(Lab900Form)
  public form: Lab900Form<any>;

  public formSchema: Lab900FormConfig = {
    fields: [
      {
        attribute: 'toggle1',
        title: 'Slide Toggle',
        editType: EditType.SlideToggle,
      },
      {
        attribute: 'toggle2',
        title: 'With label',
        editType: EditType.SlideToggle,
        options: {
          label: 'Slide me!',
        },
      },
      {
        attribute: 'toggle3',
        title: 'With label (before)',
        editType: EditType.SlideToggle,
        options: {
          label: 'Slide me!',
          labelPosition: 'before',
        },
      },
      {
        attribute: 'toggle4',
        title: 'Read only',
        editType: EditType.SlideToggle,
        options: {
          readonly: true,
        },
      },
    ],
  };

  public formData: any = {
    toggle1: false,
    toggle2: false,
    toggle3: false,
    toggle4: true,
  };

  public logValue(): void {
    console.log(this.form.value);
  }
}
