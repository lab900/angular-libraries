import { FormFieldBase } from '../../../models/form-field-base';
import { EditType } from '../../../models/editType';
import { FormFieldAutocompleteOptions } from '../autocomplete-field/autocomplete-field.model';

export interface FormFieldAutocompleteMulti<T extends string | number = string>
  extends FormFieldBase<T, FormFieldAutocompleteOptions> {
  editType: EditType.AutocompleteMultiple;
}
