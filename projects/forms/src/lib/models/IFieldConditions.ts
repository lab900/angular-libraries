import { AbstractControl, FormGroup } from '@angular/forms';
import { FormField } from './FormField';
import { Observable, Subscription } from 'rxjs';
import * as _ from 'lodash';
import validate = WebAssembly.validate;
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

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
  hideIfEquals?: T;
  showIfEquals?: T;
  disableIfEquals?: T;
  enabledIfEquals?: T;
  onChangeFn?: (value: T, currentControl: AbstractControl, dependControl: AbstractControl) => any;
  conditionalOptions?: (value: T, currentControl: AbstractControl) => any[] | Observable<any[]>;
}

export class FieldConditions<T = any> implements IFieldConditions<T> {
  public dependOn: string;
  public hideIfHasValue?: boolean;
  public showIfHasValue?: boolean;
  public disableIfHasValue?: boolean;
  public enableIfHasValue?: boolean;
  public hideIfEquals?: T;
  public showIfEquals?: T;
  public disableIfEquals?: T;
  public enabledIfEquals?: T;
  public onChangeFn?: (value: T, currentControl: AbstractControl, dependControl: AbstractControl) => any;
  public conditionalOptions?: (value: T) => any;

  public readonly dependControl: AbstractControl;
  public prevValue: T;

  private get fieldControl(): AbstractControl {
    return this.group.get(this.schema.attribute);
  }

  public constructor(private readonly group: FormGroup, private readonly schema: FormField, fieldConditions?: IFieldConditions) {
    if (fieldConditions) {
      Object.assign(this, fieldConditions);
      this.dependControl = this.group.get(this.dependOn);
      if (!this.dependControl) {
        throw new Error(`Can't create conditional form field: no control with name ${this.dependOn} found`);
      }
    }
  }

  public start(callback?: (dependOn: string, value: T, firstRun?: boolean) => void): Subscription {
    this.runAll(this.dependControl.value, true, callback);
    return this.dependControl.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((value: T) => this.runAll(value, false, callback));
  }

  public runAll(value: T, firstRun: boolean, callback?: (dependOn: string, value: T, firstRun?: boolean) => void): void {
    if (firstRun || !areValuesEqual(this.prevValue, value)) {
      if (this.onChangeFn && typeof this.onChangeFn === 'function') {
        this.onChangeFn(value, this.fieldControl, this.dependControl);
      }
      if (!this.schema.options?.visibleFn) {
        this.runVisibilityConditions(value);
      } else {
        throw new Error(`Can't create visibility conditions: visibleFn option is set and may cause conflicts`);
      }
      if (!this.schema.options?.readonly) {
        this.runDisableConditions(value);
      } else {
        throw new Error(`Can't create disabled/enable conditions: readonly option is set and may cause conflicts`);
      }
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
    const hide = (isTrue: boolean) => (this.schema.options.hide = isTrue);
    this.run('hideIfHasValue', this.hideIfHasValue && !!value, (isTrue: boolean) => hide(isTrue));
    this.run('showIfHasValue', this.showIfHasValue && !!value, (isTrue: boolean) => hide(!isTrue));
    this.run('hideIfEquals', this.hideIfEquals === value, (isTrue: boolean) => hide(isTrue));
    this.run('showIfEquals', this.showIfEquals === value, (isTrue: boolean) => hide(!isTrue));
  }

  public runDisableConditions(value: T): void {
    const enable = (isTrue: boolean) => setTimeout(() => (isTrue ? this.fieldControl.enable() : this.fieldControl.disable()));
    this.run('disableIfHasValue', this.disableIfHasValue && !!value, (isTrue: boolean) => enable(!isTrue));
    this.run('enableIfHasValue', this.enableIfHasValue && !!value, (isTrue: boolean) => enable(isTrue));
    this.run('disableIfEquals', this.disableIfEquals === value, (isTrue: boolean) => enable(!isTrue));
    this.run('enabledIfEquals', this.enabledIfEquals === value, (isTrue: boolean) => enable(isTrue));
  }
}
