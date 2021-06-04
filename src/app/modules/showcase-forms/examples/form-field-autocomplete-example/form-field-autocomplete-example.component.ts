import { Component } from '@angular/core';
import { Form, EditType, ValueLabel } from '@lab900/forms';
import { of } from 'rxjs';

@Component({
  selector: 'lab900-form-field-autocomplete-example',
  styleUrls: ['./form-field-autocomplete-example.component.scss'],
  template: '<lab900-form [schema]="formSchema"></lab900-form>',
})
export class FormFieldAutocompleteExampleComponent {
  public options: ValueLabel[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }].map((value) => ({ value, label: value.name }));

  public formSchema: Form = {
    fields: [
      {
        attribute: 'textInput',
        title: 'Search a value',
        editType: EditType.Autocomplete,
        options: {
          autocompleteOptions: (value: string) => of(this.filter(value)),
          debounceTime: 500,
          displayInputFn: (user: { name: string }) => user?.name ?? '',
          displayOptionFn: (user: ValueLabel) => {
            const userName = user?.label ?? '';
            const image =
              'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fyou%2Fyou-mockup.svg?alt=media';
            return `<div class="user-option"><img width="20" height="20" src="${image}"> ${userName}</div>`;
          },
        },
      },
    ],
  };

  private filter(value: string): ValueLabel[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: ValueLabel) => option.label.toLowerCase().includes(filterValue));
  }
}
