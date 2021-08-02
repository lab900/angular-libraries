import { FormFieldInput } from '../components/form-fields/input-field/input-field.model';
import { FormFieldMultiLang } from '../components/form-fields/multi-lang-input/multi-lang-input-field.model';
import { CheckboxFieldModel } from '../components/form-fields/checkbox-field/checkbox-field.model';
import { FormFieldRadioButtons } from '../components/form-fields/radio-buttons-field/radio-buttons-field.model';
import { FormFieldFilePreview } from '../components/form-fields/file-preview-field/file-preview-field.model';
import { FormFieldIcon } from '../components/form-fields/icon-field/icon-field.model';
import { FormFieldRangeSlider } from '../components/form-fields/range-slider-field/range-slider-field.model';
import { FormFieldDatePicker } from '../components/form-fields/date-field/date-field.model';
import { FormFieldDateTimePicker } from '../components/form-fields/date-time-field/date-time-field.model';
import { FormFieldAutocomplete } from '../components/form-fields/autocomplete-field/autocomplete-field.model';
import { FormFieldButtonToggle } from '../components/form-fields/button-toggle-field/button-toggle-field.model';
import { FormFieldSlideToggle } from '../components/form-fields/slide-toggle-field/slide-toggle-field.model';
import { FormFieldAutocompleteMulti } from '../components/form-fields/autocomplete-multiple-field/autocomplete-multiple-field.model';
import { FormFieldDateRange } from '../components/form-fields/date-range-field/date-range-field.model';
import { FormFieldFile } from '../components/form-fields/file-field/file-field.model';
import { FormFieldRepeater } from '../components/form-fields/repeater-field/repeater-field.model';
import { FormFieldTextarea } from '../components/form-fields/textarea-field/textarea-field.model';
import { FormRow } from '../components/form-row/form-row.model';
import { WysiwgFieldModel } from '../components/form-fields/wysiwyg-field/wysiwg-field.model';
import { FormFieldSelect } from '../components/form-fields/select-field/field-select.model';

export type Lab900FormField<T extends string | number = string> =
  | FormFieldInput<T>
  | FormFieldMultiLang<T>
  | WysiwgFieldModel<T>
  | FormFieldSelect<T>
  | CheckboxFieldModel<T>
  | FormFieldRadioButtons<T>
  | FormFieldFilePreview<T>
  | FormFieldFile<T>
  | FormFieldIcon<T>
  | FormRow<T>
  | FormFieldButtonToggle<T>
  | FormFieldSlideToggle<T>
  | FormFieldRangeSlider<T>
  | FormFieldDatePicker<T>
  | FormFieldDateTimePicker<T>
  | FormFieldDateRange<T>
  | FormFieldAutocomplete<T>
  | FormFieldAutocompleteMulti<T>
  | FormFieldRepeater<T>
  | FormFieldTextarea<T>;
