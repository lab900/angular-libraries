import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, HostBinding, HostListener, Input, OnDestroy, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { BaseControlValueAccessor } from '../../../utils/BaseControlValueAccessor';

@Component({
  selector: 'lab900-mat-file-field',
  templateUrl: './mat-file-field.component.html',
  styleUrls: ['./mat-file-field.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: MatFileFieldComponent }],
})
export class MatFileFieldComponent extends BaseControlValueAccessor<File> implements OnInit, OnDestroy, MatFormFieldControl<File> {
  static nextId = 0;
  @HostBinding() id = `lab900-file-field-${MatFileFieldComponent.nextId++}`;
  readonly controlType: string = 'lab900-file-field';
  readonly stateChanges = new Subject<void>();
  @HostBinding('attr.aria-describedby') describedBy = '';

  private placeholderStore: string;

  public focused = false;
  readonly disabled: boolean = false;
  readonly required: boolean = false;

  open = false;

  @Input() formControlName: string;

  constructor(private host: ElementRef, private fm: FocusMonitor, @Optional() @Self() public ngControl: NgControl) {
    super();
    this.host = host;

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.disabled = ngControl.disabled;
    this.required = ngControl.hasError('required');
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

  @HostBinding('class.mat-form-field-should-float')
  get shouldLabelFloat() {
    return this.focused || !this.empty || this.placeholderStore !== undefined;
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  @Input()
  get placeholder() {
    return this.placeholderStore;
  }

  set placeholder(plh: string) {
    this.placeholderStore = plh;
    this.stateChanges.next();
  }

  get autofilled(): boolean {
    return false;
  }

  get empty(): boolean {
    return !this.value;
  }

  get errorState(): boolean {
    return !this.open && this.ngControl.touched && !!this.ngControl.errors;
  }

  onContainerClick(event: MouseEvent): void {
    const inputElement: HTMLElement = this.host.nativeElement.querySelector('input');
    inputElement.click();
    this.focused = true;
    this.open = true;
    this.onTouched();
    this.stateChanges.next();
  }

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.value = file;
    this.onChange(file);
    this.focused = false;
    this.open = false;
    this.stateChanges.next();
  }
}
