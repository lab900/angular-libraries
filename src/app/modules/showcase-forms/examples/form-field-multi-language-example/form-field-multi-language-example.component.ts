import { Component } from '@angular/core';
import { Form, EditType, multiLanguageValidator, ValueLabel } from '@lab900/forms';

const languages: ValueLabel[] = [
  { value: 'nl', label: 'NLD' },
  { value: 'en', label: 'ENG' },
  { value: 'fr', label: 'FR' },
];

@Component({
  selector: 'lab900-form-field-multi-language-example',
  template: '<lab900-form-container [schema]="formSchema" [data]="data"></lab900-form-container>',
})
export class FormFieldMultiLanguageExampleComponent {
  public formSchema: Form = {
    fields: [
      {
        attribute: 'multiLangField2',
        title: 'Multi language field',
        editType: EditType.MultiLangInput,
        validators: [multiLanguageValidator()],
        options: {
          languages,
        },
        errorMessages: {
          missingTranslations: 'missing translations',
        },
      },
    ],
  };

  public data = {
    multiLangField: { en: 'field en', nl: 'field nl', fr: 'field fr' },
  };
}
