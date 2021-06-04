import { Component } from '@angular/core';
import { Form, EditType, ValueLabel } from '@lab900/forms';
import { of } from 'rxjs';

@Component({
  selector: 'lab900-form-field-autocomplete-multiple-example',
  template: '<lab900-form [schema]="formSchema"></lab900-form>',
})
export class FormFieldAutocompleteMultipleExampleComponent {
  public options: ValueLabel[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }].map((value) => ({ value, label: value.name }));

  public formSchema: Form = {
    fields: [
      {
        attribute: 'textInput',
        title: 'Search a value',
        editType: EditType.AutocompleteMultiple,
        options: {
          autocompleteOptions: (value: string) => of(this.filter(value)),
          displayInputFn: (user: { name: string }) => user?.name ?? '',
          displayOptionFn: (user: ValueLabel) => user?.label,
        },
      },
    ],
  };

  private filter(value: string): ValueLabel[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: ValueLabel) => option.label.toLowerCase().includes(filterValue));
  }
}
