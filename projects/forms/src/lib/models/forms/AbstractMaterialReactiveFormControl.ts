import { FocusMonitor } from '@angular/cdk/a11y';
import { ElementRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { BaseControlValueAccessor } from './BaseControlValueAccessor';

export abstract class AbstractMaterialReactiveFormControl<T> extends BaseControlValueAccessor<T>
  implements MatFormFieldControl<T>, OnInit, OnDestroy {
  static nextId = 0;
  @HostBinding() readonly id: string;
  readonly controlType: string;
  readonly stateChanges: Subject<void>;
  @HostBinding('attr.aria-describedby') describedBy = '';

  private placeholderStore: string;
  private requiredStore: boolean;

  focused = false;

  constructor(id: string, protected host: ElementRef, private fm: FocusMonitor, public ngControl: NgControl) {
    super();
    this.stateChanges = new Subject<void>();
    this.host = host;
    this.id = `${id}-${AbstractMaterialReactiveFormControl.nextId++}`;
    this.controlType = `${id}`;

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.fm.monitor(this.host.nativeElement, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.fm.stopMonitoring(this.host.nativeElement);
    this.stateChanges.complete();
  }

  abstract onContainerClick(event: MouseEvent): void;

  @Input()
  public get required(): boolean {
    return this.requiredStore;
  }

  public set required(newValue: boolean) {
    this.requiredStore = newValue;
    this.stateChanges.next();
  }

  @HostBinding('class.mat-form-field-should-float')
  public get shouldLabelFloat() {
    return this.focused || !this.empty || this.placeholderStore !== undefined;
  }

  public setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  @Input()
  public get placeholder() {
    return this.placeholderStore;
  }

  public set placeholder(plh: string) {
    this.placeholderStore = plh;
    this.stateChanges.next();
  }

  public set disabled(newValue: boolean) {
    super.disabled = newValue;
    this.stateChanges.next();
  }

  public get autofilled(): boolean {
    return false;
  }

  public get empty(): boolean {
    return !this.value;
  }

  public get errorState(): boolean {
    return this.ngControl.touched && !!this.ngControl.errors;
  }
}
