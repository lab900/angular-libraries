import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, HostListener, Input, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { AbstractMaterialReactiveFormControl } from '../../../models/forms/AbstractMaterialReactiveFormControl';

@Component({
  selector: 'lab900-mat-file-field',
  templateUrl: './mat-file-field.component.html',
  styleUrls: ['./mat-file-field.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: MatFileFieldComponent }],
})
export class MatFileFieldComponent extends AbstractMaterialReactiveFormControl<File> {
  open = false;

  @Input() formControlName: string;

  constructor(host: ElementRef, fm: FocusMonitor, @Optional() @Self() ngControl: NgControl) {
    super('lab900-file-field', host, fm, ngControl);
  }

  public get errorState(): boolean {
    return !this.open && super.errorState;
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
    this.value = coerceBooleanProperty(this.value) && !coerceBooleanProperty(file) ? this.value : file;
    this.onChange(this.value);
    this.focused = false;
    this.open = false;
    this.stateChanges.next();
  }

  clear(event) {
    event.stopPropagation();
    this.value = null;
    this.open = false;
    this.focused = false;
    this.stateChanges.next();
  }
}
