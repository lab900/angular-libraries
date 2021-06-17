import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { InjectionToken } from '@angular/core';
import { IConfig } from 'ngx-mask';

export const LAB900_FORM_MODULE_SETTINGS = new InjectionToken<Lab900FormModuleSettings>('lab900FormModuleSetting');

export interface Lab900FormModuleSettings {
  formField?: MatFormFieldDefaultOptions;
  fieldMask?: Partial<IConfig>;
}

export const defaultFormModuleSettings: Lab900FormModuleSettings = {
  formField: {
    appearance: 'standard',
    floatLabel: 'auto',
    hideRequiredMarker: false,
  },
  fieldMask: {
    thousandSeparator: '.',
    decimalMarker: ',',
  },
};
