import { Component } from '@angular/core';
import { EditType, Lab900FormConfig, FormFieldSelectOptionsFilter, ValueLabel } from '@lab900/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lab900-form-field-select-advanced-example',
  template: '<lab900-form [schema]="formSchema"></lab900-form>',
})
export class FormFieldSelectAdvancedExampleComponent {
  public getSelectOptions = (filter?: FormFieldSelectOptionsFilter): Observable<ValueLabel[]> => {
    return this.http
      .get<{ docs: any[] }>('https://openlibrary.org/search.json', {
        params: {
          q: filter?.searchQuery || 'tolkien',
          limit: '10',
          offset: String((filter?.page || 0) * 10),
        },
      })
      .pipe(
        map((res) =>
          res?.docs?.map((d) => ({
            label: d.title,
            value: d,
          })),
        ),
      );
  };

  public formSchema: Lab900FormConfig = {
    fields: [
      {
        attribute: '',
        editType: EditType.Row,
        nestedFields: [
          {
            attribute: 'books',
            title: 'Select a book',
            editType: EditType.Select,
            options: {
              selectOptions: this.getSelectOptions,
              colspan: 6,
              infiniteScroll: {
                enabled: true,
              },
            },
          },
          {
            attribute: 'books2',
            title: 'Search a book',
            editType: EditType.Select,
            options: {
              selectOptions: this.getSelectOptions,
              colspan: 6,
              infiniteScroll: {
                enabled: true,
              },
              search: {
                enabled: true,
              },
            },
          },
        ],
      },
    ],
  };

  public constructor(private http: HttpClient) {}
}
