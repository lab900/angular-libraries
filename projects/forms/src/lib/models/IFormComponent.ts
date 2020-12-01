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
  protected subs: Subscription[] = [];

  @Input()
  public group: FormGroup;

  @Input()
  public schema: FormField<T>;

  @Input()
  public readonly = false; // Global form readonly flag

  public fieldIsReadonly: boolean;
  public fieldIsHidden: boolean;

  public get fieldControl(): AbstractControl {
    return this.group.get(this.schema.attribute);
  }

  public get valid(): boolean {
    return this.fieldControl?.valid;
  }

  public get touched(): boolean {
    return this.fieldControl?.touched;
  }

  public get options(): T {
    return this.schema?.options;
  }

  public get required(): boolean {
    return (!this.readonly && this.options?.required) ?? false;
  }

  public get hint(): string {
    return this.options?.hint?.value;
  }

  public get placeholder(): string {
    return this.options?.placeholder;
  }

  protected constructor(private translateService: TranslateService) {}

  public ngAfterViewInit(): void {
    if (this.group) {
      setTimeout(() => {
        this.hide();
        this.isReadonly();
        this.subs.push(
          this.group.valueChanges.subscribe(() => {
            setTimeout(() => {
              this.hide();
              this.isReadonly();
            });
          }),
        );
      });
      if (this.schema?.conditions?.length) {
        this.createConditions();
      }
    }
  }

  public ngOnDestroy(): void {
    if (this.subs?.length) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }

  public onConditionalChange(dependOn: string, value: any, firstRun?: boolean): void {}

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

  private hide(): void {
    if (typeof this.options?.hide === 'function') {
      this.fieldIsHidden = this.options?.hide(this.group.value);
    } else {
      this.fieldIsHidden = this.options?.hide ?? false;
    }
  }

  private isReadonly(): void {
    if (this.readonly === true) {
      this.fieldIsReadonly = this.readonly;
    } else if (typeof this.options?.readonly === 'function') {
      this.fieldIsReadonly = this.options?.readonly(this.group.value);
    } else {
      this.fieldIsReadonly = this.options?.readonly ?? false;
    }
  }

  private createConditions(): void {
    this.schema.conditions
      .filter((c) => c.dependOn)
      .map((c) => new FieldConditions(this.group, this.schema, c))
      .forEach((conditions: FieldConditions) => {
        const sub = conditions.start((dependOn: string, value: any, firstRun: boolean) => {
          if (this.onConditionalChange) {
            this.onConditionalChange(dependOn, value, firstRun);
          }
        });
        if (sub) {
          this.subs.push(sub);
        }
      });
  }
}
