import { Component } from '@angular/core';
import { Form } from 'projects/forms/src/lib/models/Form';
import { EditType } from 'projects/forms/src/lib/models/editType';
import { of } from 'rxjs';

@Component({
  selector: 'lab900-form-field-autocomplete-multiple-example',
  template: '<lab900-form-container #formContainer [schema]="formSchema"></lab900-form-container>',
})
export class FormFieldAutocompleteMultipleExampleComponent {
  public options: { name: string }[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];

  public formSchema: Form = {
    fields: [
      {
        attribute: 'textInput',
        title: 'Search a value',
        editType: EditType.AutocompleteMultiple,
        options: {
          getOptionsFn: (value: string) => of(this.filter(value)),
          displayInputFn: (user: { name: string }) => (user && user.name) || '',
          displayOptionFn: (user: { name: string }) => (user && user.name) || '',
        },
      },
    ],
  };

  private filter(value: string): { name: string }[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: { name: string }) => option.name.toLowerCase().includes(filterValue));
  }
}
