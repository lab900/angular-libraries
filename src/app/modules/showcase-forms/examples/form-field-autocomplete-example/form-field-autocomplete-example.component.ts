import { Component, ViewChild } from '@angular/core';
import { Lab900FormConfig, Lab900Form, EditType, ValueLabel } from '@lab900/forms';
import { of } from 'rxjs';

@Component({
  selector: 'lab900-form-field-autocomplete-example',
  styleUrls: ['./form-field-autocomplete-example.component.scss'],
  template:
    '<lab900-form [schema]="formSchema"></lab900-form><button mat-raised-button color="primary" (click)="validate()">Submit</button>',
})
export class FormFieldAutocompleteExampleComponent {
  @ViewChild(Lab900Form)
  public formContainer: Lab900Form<any>;

  public options: ValueLabel[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }].map((value) => ({ value, label: value.name }));

  public formSchema: Lab900FormConfig = {
    fields: [
      {
        attribute: 'textInput',
        title: 'Search a value',
        editType: EditType.Autocomplete,
        options: {
          required: true,
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
      {
        attribute: 'textInputMatchRequired',
        title: 'Search a value (match required)',
        editType: EditType.Autocomplete,
        options: {
          autocompleteOptions: (value: string) => of(this.filter(value)),
          debounceTime: 500,
          requireMatch: true,
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

  public validate(): void {
    console.log(this.formContainer.valid);
  }
}
