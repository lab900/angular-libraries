import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function multiLanguageValidator(): ValidatorFn {
  return (group: FormGroup): ValidationErrors => {
    const values: Record<string, string> = group?.value ?? {};
    if (values && !Object.values(values).some((v) => !v?.length)) {
      return null;
    }
    return { missingTranslations: true };
  };
}
