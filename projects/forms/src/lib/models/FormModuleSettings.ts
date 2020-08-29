import { MatFormFieldDefaultOptions } from '@angular/material/form-field';

export interface FormModuleSettings {
  formField?: MatFormFieldDefaultOptions;
}

export const defaultFormModuleSettings: FormModuleSettings = {
  formField: {
    appearance: 'standard',
    floatLabel: 'auto',
    hideRequiredMarker: false,
  },
};
