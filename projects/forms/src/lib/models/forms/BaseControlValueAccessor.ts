import { Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class BaseControlValueAccessor<T> implements ControlValueAccessor {
  public value: T;
  disabledStore: boolean;

  /**
   * Call when value has changed programmatically
   */
  public onChange(newVal: T) {}

  public onTouched(_?: any) {}

  /**
   * Model -> View changes
   */
  public writeValue(obj: T): void {
    this.value = obj;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  @Input()
  get disabled(): boolean {
    return this.disabledStore;
  }

  set disabled(newValue: boolean) {
    this.disabledStore = newValue;
  }
}
