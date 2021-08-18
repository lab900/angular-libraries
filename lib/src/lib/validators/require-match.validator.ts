import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validates that a selection from the autocomplete has been made.
 * Denies a free-text input.
 */
export function requireMatchValidator(): ValidatorFn {
  return (control: FormControl): ValidationErrors => {
    const value = control.value;
    if (value !== '' && typeof value === 'string') {
      return { requireMatch: true };
    }
    return null;
  };
}
