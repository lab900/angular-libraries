import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FieldOptions, FormField } from './FormField';
import { AfterViewInit, Directive, Input, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { FieldConditions } from './IFieldConditions';

export interface IFormComponent<T extends FieldOptions> {
  schema: FormField<T>;
  group: FormGroup;
}

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class FormComponent<T extends FieldOptions = FieldOptions> implements IFormComponent<T>, AfterViewInit, OnDestroy {
  private conditionalSubs: Subscription[] = [];

  @Input()
  public group: FormGroup;

  @Input()
  public schema: FormField<T>;

  @Input()
  public readonly = false; // Global form readonly flag

  public get fieldControl(): AbstractControl {
    return this.group.get(this.schema.attribute);
  }

  public get valid(): boolean {
    return this.fieldControl?.valid;
  }

  public get options(): T {
    return this.schema?.options;
  }

  public get required(): boolean {
    return (!this.readonly && this.schema?.options?.required) ?? false;
  }

  public get hint(): string {
    return this.schema?.options?.hint?.value;
  }

  public get placeholder(): string {
    return this.schema?.options?.placeholder;
  }

  protected constructor(private translateService: TranslateService) {}

  public ngAfterViewInit(): void {
    if (this.group && this.schema?.conditions?.length) {
      this.createConditions();
    }
  }

  public ngOnDestroy(): void {
    if (this.conditionalSubs?.length) {
      this.conditionalSubs.forEach((sub) => sub.unsubscribe());
    }
  }

  public hide(value?: any): boolean {
    if (typeof this.schema?.options?.hide === 'function') {
      return this.schema?.options?.hide(value);
    }
    return this.schema?.options?.hide ?? false;
  }

  public isReadonly(value?: any): boolean {
    if (typeof this.schema?.options?.readonly === 'function') {
      return !this.readonly && this.schema?.options?.readonly(value);
    }
    return (this.readonly || this.schema?.options?.readonly) ?? false;
  }

  public getErrorMessage(group: FormGroup = this.group): Observable<string> {
    const field = group.get(this.schema.attribute);
    let errors: ValidationErrors = field.errors;
    let message = this.translateService.get('forms.error.generic');

    if (field instanceof FormGroup && field.controls) {
      errors = {};
      for (const controlsKey in field.controls) {
        if (field.controls.hasOwnProperty(controlsKey)) {
          errors = { ...errors, ...field.get(controlsKey).errors };
        }
      }
    }

    if (!errors) {
      return;
    }

    Object.keys(errors).forEach((key: string) => {
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

  private createConditions(): void {
    this.schema.conditions
      .filter((c) => c.dependOn)
      .map((c) => new FieldConditions(this.group, this.schema, c))
      .forEach((conditions: FieldConditions) => this.conditionalSubs.push(conditions.start()));
  }
}
