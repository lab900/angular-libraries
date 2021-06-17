import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function multiLanguageValidator(): ValidatorFn {
  return (control: FormControl): ValidationErrors => {
    const values: string[] = Object.values(control?.value ?? {});
    if (!!values?.length && !Object.values(values).some((v) => !v?.length)) {
      return null;
    }
    return { missingTranslations: true };
  };
}
