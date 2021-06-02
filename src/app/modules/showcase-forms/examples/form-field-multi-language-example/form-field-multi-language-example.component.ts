import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Form, EditType, FormContainerComponent } from '@lab900/forms';

@Component({
  selector: 'lab900-form-field-multi-language-example',
  template: `
    <lab900-form-container [schema]="formSchema"></lab900-form-container>
    <pre>{{ form?.value | json }}</pre>
  `,
})
export class FormFieldMultiLanguageExampleComponent implements AfterViewInit {
  @ViewChild(FormContainerComponent)
  public form: FormContainerComponent<any>;

  public formSchema: Form = {
    fields: [
      {
        attribute: 'Textarea',
        title: 'Textarea',
        editType: EditType.MultiLangInput,
        options: {
          languages: [
            { value: 'nl', label: 'NLD' },
            { value: 'en', label: 'ENG' },
          ],
        },
      },
    ],
  };

  public ngAfterViewInit() {
    setTimeout(() => {
      console.log(this.form);
    });
  }
}
