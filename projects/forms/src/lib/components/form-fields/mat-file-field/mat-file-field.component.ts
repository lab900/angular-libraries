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

  @Input() formControlName: string;

  readonly controlType: string = 'lab900-file-field';
  readonly disabled: boolean = false;
  private placeholderStore: string;
  readonly required: boolean = false;
  readonly stateChanges = new Subject<void>();

  public focused = false;

  constructor(private host: ElementRef, private fm: FocusMonitor, @Optional() @Self() public ngControl: NgControl) {
    super();
    this.host = host;
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
    fm.monitor(host.nativeElement, true).subscribe((origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.fm.stopMonitoring(this.host.nativeElement);
    this.stateChanges.complete();
  }

  @HostBinding('class.mat-form-field-should-float')
  get shouldLabelFloat() {
    return this.focused || !this.empty || this.placeholderStore !== undefined;
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
    return false;
  }

  onContainerClick(event: MouseEvent): void {
    const inputElement: HTMLElement = this.host.nativeElement.querySelector('input');

    inputElement.click();
  }

  setDescribedByIds(ids: string[]): void {}

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    const file = event && event.item(0);
    this.value = file;
    this.onChange(file);
    this.stateChanges.next();
  }
}
