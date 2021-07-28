import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import {
  CanUpdateErrorStateCtor,
  ErrorStateMatcher,
  mixinErrorState,
} from '@angular/material/core';
import { SubscriptionBasedDirective } from '../../../../directives/subscription-based.directive';

// Boilerplate for applying mixins to FileInput
export class FileInputBase extends SubscriptionBasedDirective {
  public constructor(
    public _defaultErrorStateMatcher: ErrorStateMatcher,
    public _parentForm: NgForm,
    public _parentFormGroup: FormGroupDirective,
    public ngControl: NgControl
  ) {
    super();
  }
}

/**
 * Allows to use a custom ErrorStateMatcher with the file-input component
 */
export const FileInputMixinBase: CanUpdateErrorStateCtor &
  typeof FileInputBase = mixinErrorState(FileInputBase);
