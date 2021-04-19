import { AbstractControl, FormGroup } from '@angular/forms';
import { FormField } from './FormField';
import { Observable, Subscription } from 'rxjs';
import * as _ from 'lodash';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormComponent } from './IFormComponent';

export const areValuesEqual = (val1: any, val2: any): boolean => {
  if (typeof val1 === 'object' && typeof val2 === 'object') {
    return _.isEqual(val1, val2);
  }
  return val1 === val2;
};

export interface IFieldConditions<T = any> {
  dependOn: string;
  hideIfHasValue?: boolean;
  showIfHasValue?: boolean;
  disableIfHasValue?: boolean;
  enableIfHasValue?: boolean;
  hideIfEquals?: ((value: T) => boolean) | T;
  showIfEquals?: ((value: T) => boolean) | T;
  disableIfEquals?: ((value: T) => boolean) | T;
  enabledIfEquals?: ((value: T) => boolean) | T;
  onChangeFn?: (value: T, currentControl: AbstractControl, currentScheme: FormField) => any;
  conditionalOptions?: (value: T, currentControl: AbstractControl) => any[] | Observable<any[]>;
  skipIfNotExists?: boolean;
}

export class FieldConditions<T = any> implements IFieldConditions<T> {
  private get fieldControl(): AbstractControl {
    return this.group.get(this.schema.attribute);
  }
  public dependOn: string;
  public hideIfHasValue?: boolean;
  public showIfHasValue?: boolean;
  public disableIfHasValue?: boolean;
  public enableIfHasValue?: boolean;
  public hideIfEquals?: ((value: T) => boolean) | T;
  public showIfEquals?: ((value: T) => boolean) | T;
  public disableIfEquals?: ((value: T) => boolean) | T;
  public enabledIfEquals?: ((value: T) => boolean) | T;
  public onChangeFn?: (value: T, currentControl: AbstractControl, currentScheme: FormField) => any;
  public conditionalOptions?: (value: T) => any;
  public skipIfNotExists = false;

  public readonly dependControl: AbstractControl;
  public prevValue: T;

  private readonly group: FormGroup;
  private readonly schema: FormField;
  public constructor(private readonly component: FormComponent<any>, fieldConditions?: IFieldConditions) {
    this.group = component.group;
    this.schema = component.schema;
    if (fieldConditions) {
      Object.assign(this, fieldConditions);
      this.dependControl = this.getDependControl(this.group);
      if (!this.skipIfNotExists && !this.dependControl) {
        throw new Error(`Can't create conditional form field: no control with name ${this.dependOn} found`);
      }
    }
  }

  private static valueIsEqualTo(value: any, condition: ((obj: any) => boolean) | any): boolean {
    return typeof condition === 'function' ? condition(value) : condition === value;
  }

  private static hasValue(value: any): boolean {
    return value !== null && typeof value !== 'undefined';
  }

  public getDependControl(group: FormGroup): AbstractControl {
    let dependControl = group.get(this.dependOn);
    if (!dependControl && group.parent) {
      dependControl = this.getDependControl(group.parent as FormGroup);
    }
    return dependControl;
  }

  public start(callback?: (dependOn: string, value: T, firstRun?: boolean) => void): Subscription {
    if (this.dependControl) {
      this.runAll(this.dependControl.value, true, callback);
      return this.dependControl.valueChanges
        .pipe(debounceTime(100), distinctUntilChanged())
        .subscribe((value: T) => this.runAll(value, false, callback));
    }
  }

  public runAll(value: T, firstRun: boolean, callback?: (dependOn: string, value: T, firstRun?: boolean) => void): void {
    if (firstRun || !areValuesEqual(this.prevValue, value)) {
      if (this.onChangeFn && typeof this.onChangeFn === 'function') {
        this.onChangeFn(value, this.fieldControl, this.schema);
      }
      if (!this.schema.options?.visibleFn) {
        this.runVisibilityConditions(value);
      } else {
        throw new Error(`Can't create visibility conditions: visibleFn option is set and may cause conflicts`);
      }
      this.runDisableConditions(value);
      if (callback && typeof callback === 'function') {
        callback(this.dependOn, value, firstRun);
      }
      this.prevValue = value;
    }
  }

  public run(key: string, condition: boolean, callback: (isTrue: boolean) => void): void {
    if (this.hasOwnProperty(key)) {
      callback(condition);
    }
  }

  public runVisibilityConditions(value: T): void {
    // Fix ExpressionChangedAfterItHasBeenCheckedError with timeout
    setTimeout(() => {
      const hide = (isTrue: boolean) => (this.schema.options = { ...(this.schema.options ?? {}), hide: isTrue });
      this.run('hideIfHasValue', this.hideIfHasValue && FieldConditions.hasValue(value), (isTrue: boolean) => hide(isTrue));
      this.run('showIfHasValue', this.showIfHasValue && FieldConditions.hasValue(value), (isTrue: boolean) => hide(!isTrue));
      this.run('hideIfEquals', FieldConditions.valueIsEqualTo(value, this.hideIfEquals), (isTrue: boolean) => hide(isTrue));
      this.run('showIfEquals', FieldConditions.valueIsEqualTo(value, this.showIfEquals), (isTrue: boolean) => hide(!isTrue));
      // Refresh hide settings
      this.component.hide();
    });
  }

  public runDisableConditions(value: T): void {
    const enable = (isTrue: boolean) => setTimeout(() => (isTrue ? this.fieldControl.enable() : this.fieldControl.disable()));
    this.run('disableIfHasValue', this.disableIfHasValue && FieldConditions.hasValue(value), (isTrue: boolean) => enable(!isTrue));
    this.run('enableIfHasValue', this.enableIfHasValue && FieldConditions.hasValue(value), (isTrue: boolean) => enable(isTrue));
    this.run('disableIfEquals', FieldConditions.valueIsEqualTo(value, this.disableIfEquals), (isTrue: boolean) => enable(!isTrue));
    this.run('enabledIfEquals', FieldConditions.valueIsEqualTo(value, this.enabledIfEquals), (isTrue: boolean) => enable(isTrue));
  }
}
