import { FormGroup } from '@angular/forms';
import { FormField, FieldOptions } from './FormField';
import { Input, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export interface IFormComponent<T extends FieldOptions> {
  schema: FormField<T>;
  group: FormGroup;
}

@Injectable()
export abstract class FormComponent<T extends FieldOptions = FieldOptions> implements IFormComponent<T> {
  @Input()
  public group: FormGroup;

  @Input()
  public schema: FormField<T>;

  public constructor(private translateService: TranslateService) {}

  @Input()
  public readonly = false;

  public get valid(): boolean {
    return this.group.get(this.schema.attribute).valid;
  }

  public get options(): T {
    return this.schema && this.schema.options;
  }

  public get hide(): boolean {
    return this.schema && this.schema.options && this.schema.options.hide;
  }

  public get hint(): string {
    return this.schema && this.schema.options && this.schema.options.hint && this.schema.options.hint.value;
  }

  public get placeholder(): string {
    return this.schema && this.schema.options && this.schema.options.placeholder;
  }

  public getErrorMessage(): Observable<string> {
    const field = this.group.get(this.schema.attribute);
    let message = this.translateService.get('forms.error.generic');

    Object.keys(field.errors).forEach((key: string) => {
      if (field.hasError(key)) {
        if (this.schema.errorMessages && Object.keys(this.schema.errorMessages).includes(key)) {
          message = this.translateService.get(this.schema.errorMessages[key]);
        } else {
          message = this.getDefaultErrorMessage(key);
        }
      }
    });

    return message;
  }

  private getDefaultErrorMessage(key: string): Observable<string> {
    switch (key) {
      case 'required':
        return this.translateService.get('forms.error.required');
      case 'minlength':
        return this.translateService.get('forms.error.minlength', this.schema.options);
      case 'maxlength':
        return this.translateService.get('forms.error.maxlength', this.schema.options);
      case 'min':
        return this.translateService.get('forms.error.min', this.schema.options);
      case 'max':
        return this.translateService.get('forms.error.max', this.schema.options);
      case 'pattern':
        return this.translateService.get(this.schema.options.patternError ?? 'forms.error.generic', this.schema.options);
      default:
        return this.translateService.get('forms.error.generic');
    }
  }
}
