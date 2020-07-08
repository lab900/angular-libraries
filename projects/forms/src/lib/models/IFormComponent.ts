import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { FormField } from './FormField';
import { EditType } from './editType';

export interface IFormComponent {
  schema: FormField;
  group: FormGroup;
}

export class FormComponent implements IFormComponent {
  group: FormGroup;
  schema: FormField;

  constructor(private translateService: TranslateService) {}

  get valid(): boolean {
    return this.group.get(this.schema.attribute).valid;
  }

  get required(): boolean {
    return this.group.get(this.schema.attribute).hasError('required');
  }

  get errorMessage(): Observable<string> {
    if (this.valid) {
      return null;
    }

    const field = this.group.get(this.schema.attribute);

    if (field.hasError('required')) {
      if (this.schema.editType === EditType.Number) {
        // When there's text in a [type=number] field, its value is ""
        return this.translateService.get('forms.error.number-required');
      } else {
        return this.translateService.get('forms.error.required');
      }
    } else if (field.hasError('minlength')) {
      return this.translateService.get('forms.error.minlength', this.schema.options);
    } else if (field.hasError('maxlength')) {
      return this.translateService.get('forms.error.maxlength', this.schema.options);
    } else if (field.hasError('min')) {
      return this.translateService.get('forms.error.min', this.schema.options);
    } else if (field.hasError('max')) {
      return this.translateService.get('forms.error.max', this.schema.options);
    } else if (field.hasError('pattern')) {
      return this.translateService.get(this.schema.options.patternError ?? 'forms.error.generic', this.schema.options);
    } else {
      return this.translateService.get('forms.error.generic');
    }
  }
}
