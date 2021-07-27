import { FormFieldBase, FormFieldBaseOptions, ValueLabel } from '../../../models/form-field-base';
import { Observable } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { EditType } from '../../../models/editType';

export interface FormFieldAutocompleteOptions extends FormFieldBaseOptions {
  displayInputFn: (option: any) => string; // the value of the ValueLabel will be passed here
  displayOptionFn: (option: ValueLabel) => string;
  autocompleteOptions?: (searchTerm: string, currentControl: AbstractControl) => ValueLabel[] | Observable<ValueLabel[]>;
  debounceTime?: number;
  requireMatch?: boolean;
}

export interface FormFieldAutocomplete<T extends string | number = string> extends FormFieldBase<T, FormFieldAutocompleteOptions> {
  editType: EditType.Autocomplete;
}
