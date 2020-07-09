import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Subject, of, Observable } from 'rxjs';

import { FormField } from './FormField';
import { EditType } from './editType';
import { first } from 'rxjs/operators';

export interface IFormComponent {
  schema: FormField;
  group: FormGroup;
}

export class FormComponent implements IFormComponent {
  group: FormGroup;
  schema: FormField;

  constructor(private translateService: TranslateService) {}

  errorMessage: Subject<string | null> = new BehaviorSubject(null);

  get valid(): boolean {
    return this.group.get(this.schema.attribute).valid;
  }

  get required(): boolean {
    return this.group.get(this.schema.attribute).hasError('required');
  }

  updateErrorMessage() {
    if (this.valid) {
      this.errorMessage.next(null);
      return;
    }

    const field = this.group.get(this.schema.attribute);

    let message$: Observable<string | null> = of(null);
    if (field.hasError('required')) {
      if (this.schema.editType === EditType.Number) {
        // When there's text in a [type=number] field, its value is ""
        message$ = this.translateService.get('forms.error.number-required');
      } else {
        message$ = this.translateService.get('forms.error.required');
      }
    } else if (field.hasError('minlength')) {
      message$ = this.translateService.get('forms.error.minlength', this.schema.options);
    } else if (field.hasError('maxlength')) {
      message$ = this.translateService.get('forms.error.maxlength', this.schema.options);
    } else if (field.hasError('min')) {
      message$ = this.translateService.get('forms.error.min', this.schema.options);
    } else if (field.hasError('max')) {
      message$ = this.translateService.get('forms.error.max', this.schema.options);
    } else if (field.hasError('pattern')) {
      message$ = this.translateService.get(this.schema.options.patternError ?? 'forms.error.generic', this.schema.options);
    } else {
      message$ = this.translateService.get('forms.error.generic');
    }

    message$.pipe(first()).subscribe((m) => this.errorMessage.next(m));
  }
}
