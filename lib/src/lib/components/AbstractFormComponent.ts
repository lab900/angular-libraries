import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import {
  AfterContentInit,
  AfterViewInit,
  Directive,
  Input,
  OnDestroy,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { FieldConditions } from '../models/IFieldConditions';
import { FormFieldUtils } from '../utils/form-field.utils';
import { SubscriptionBasedDirective } from '../directives/subscription-based.directive';
import { Lab900FormField } from '../models/lab900-form-field.type';
import { ValueLabel } from '../models/form-field-base';
import { Lab900FormBuilderService } from '../services/form-builder.service';

@Directive()
export abstract class FormComponent<S extends Lab900FormField = Lab900FormField>
  extends SubscriptionBasedDirective
  implements AfterViewInit, OnDestroy, AfterContentInit
{
  @Input()
  public fieldAttribute?: string;

  @Input()
  public group: FormGroup;

  @Input()
  public schema: S;

  @Input()
  public language?: string;

  @Input()
  public externalForms?: Record<string, FormGroup>;

  @Input()
  public availableLanguages?: ValueLabel[];

  @Input()
  public readonly = false; // Global form readonly flag

  public fieldIsReadonly!: boolean;
  public fieldIsHidden!: boolean;
  public fieldIsRequired!: boolean;

  public get fieldControl(): AbstractControl {
    return this.group.get(this.fieldAttribute);
  }

  public get valid(): boolean {
    return this.fieldControl?.valid;
  }

  public get options(): S['options'] {
    return this.schema?.options;
  }

  public get touched(): boolean {
    return this.fieldControl?.touched;
  }

  public get hint(): string {
    return this.options?.hint?.value;
  }

  public get hintValueTranslateData(): object {
    return this.options?.hint?.valueTranslateData;
  }

  public get placeholder(): string {
    return this.options?.placeholder;
  }

  protected constructor(private translateService: TranslateService) {
    super();
  }

  public ngAfterContentInit(): void {
    if (this.group) {
      this.setFieldProperties();
    }
  }

  public ngAfterViewInit(): void {
    if (this.group) {
      this.addSubscription(this.group.valueChanges, (value) => {
        this.setFieldProperties();
        if (this.schema?.options?.onChangeFn) {
          this.schema?.options?.onChangeFn(value);
        }
      });
      if (this.schema?.conditions?.length) {
        this.createConditions();
      }
    }
  }

  public onConditionalChange(
    dependOn: string,
    value: any,
    firstRun?: boolean
  ): void {}

  public getErrorMessage(group: FormGroup = this.group): Observable<string> {
    const field = group.get(String(this.fieldAttribute));
    let errors: ValidationErrors = field.errors;
    let message = this.translateService.get('forms.error.generic');
    if (field instanceof FormGroup && field.controls) {
      errors = field.errors ?? {};
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
        if (
          this.schema.errorMessages &&
          Object.keys(this.schema.errorMessages).includes(key)
        ) {
          message = this.translateService.get(
            this.schema.errorMessages[key],
            field.getError(key)
          );
        } else {
          message = this.getDefaultErrorMessage(key, field.getError(key));
        }
      }
    });
    return message;
  }

  private getDefaultErrorMessage(
    key: string,
    interpolateParams: object = this.schema.options
  ): Observable<string> {
    switch (key) {
      case 'required':
        return this.translateService.get('forms.error.required');
      case 'minlength':
        return this.translateService.get(
          'forms.error.minlength',
          interpolateParams
        );
      case 'maxlength':
        return this.translateService.get(
          'forms.error.maxlength',
          interpolateParams
        );
      case 'min':
        return this.translateService.get('forms.error.min', interpolateParams);
      case 'max':
        return this.translateService.get('forms.error.max', interpolateParams);
      case 'pattern':
        return this.translateService.get(
          'forms.error.pattern',
          interpolateParams
        );
      case 'requireMatch':
        return this.translateService.get(
          'forms.error.requireMatch',
          interpolateParams
        );
      default:
        return this.translateService.get(
          'forms.error.generic',
          interpolateParams
        );
    }
  }

  public hide(): void {
    this.fieldIsHidden = FormFieldUtils.isHidden(
      this.schema?.options,
      this.group
    );
  }

  private isReadonly(): void {
    this.fieldIsReadonly = FormFieldUtils.isReadOnly(
      this.schema?.options,
      this.group.value,
      this.readonly
    );
  }

  private isRequired(): void {
    const isRequired =
      FormFieldUtils.isRequired(
        this.fieldIsReadonly,
        this.schema,
        this.group.value
      ) ?? false;
    if (this.fieldIsRequired != isRequired) {
      this.fieldIsRequired = isRequired;
      setTimeout(() => {
        this.group
          .get(this.fieldAttribute)
          .setValidators(
            Lab900FormBuilderService.addValidators(
              this.schema,
              this.group.value
            )
          );
      });
    }
  }

  private setFieldProperties(): void {
    this.hide();
    this.isReadonly();
    this.isRequired();
  }

  private createConditions(): void {
    this.schema.conditions
      .filter((c) => c.dependOn)
      .map((c) => new FieldConditions(this, c))
      .forEach((conditions: FieldConditions) => {
        const subs = conditions.start(
          (dependOn: string, value: any, firstRun: boolean) => {
            if (this.onConditionalChange) {
              this.onConditionalChange(dependOn, value, firstRun);
            }
          }
        );
        if (subs?.length) {
          this.subscriptions.concat(subs);
        }
      });
  }
}
