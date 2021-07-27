import { Input, Directive } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Directive()
export class BaseControlValueAccessorDirective<T>
  implements ControlValueAccessor
{
  public value: T;
  protected disabledStore: boolean;

  /**
   * Call when value has changed programmatically
   */
  public onChange(newVal: T): void {}

  public onTouched(_?: any): void {}

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
  public get disabled(): boolean {
    return this.disabledStore;
  }

  public set disabled(newValue: boolean) {
    this.disabledStore = newValue;
  }
}
