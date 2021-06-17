import {
  Component,
  DoCheck,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FileInputMixinBase } from './file-input-mixin';
import { FileInput } from '../../../models/FileInput';

@Component({
  selector: 'lab900-mat-file-field',
  styleUrls: ['./mat-file-field.component.scss'],
  template: `
    <input #input type="file" [attr.multiple]="multiple ? '' : null" [attr.accept]="accept" />
    <span class="filename" [title]="fileNames">{{ fileNames }}</span>
  `,
  providers: [{ provide: MatFormFieldControl, useExisting: MatFileFieldComponent }],
})
export class MatFileFieldComponent
  extends FileInputMixinBase
  implements MatFormFieldControl<FileInput>, ControlValueAccessor, OnInit, OnDestroy, DoCheck
{
  @Input()
  public get value(): FileInput | null {
    return this.empty ? null : new FileInput(this.elementRef.nativeElement.value || []);
  }

  public set value(fileInput: FileInput | null) {
    if (fileInput) {
      this.writeValue(fileInput);
      this.stateChanges.next();
    }
  }

  @Input()
  public get placeholder(): string {
    return this._placeholder;
  }

  public set placeholder(plh) {
    this._placeholder = plh;
    this.stateChanges.next();
  }

  /**
   * Whether the current input has files
   */
  public get empty(): boolean {
    return !this.elementRef.nativeElement.value || this.elementRef.nativeElement.value.length === 0;
  }

  @HostBinding('class.mat-form-field-should-float')
  public get shouldLabelFloat(): boolean {
    return this.focused || !this.empty || this.valuePlaceholder !== undefined;
  }

  @Input()
  public get required(): boolean {
    return this._required;
  }

  public set required(req: boolean) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  @HostBinding('class.file-input-disabled')
  public get isDisabled(): boolean {
    return this.disabled;
  }

  @Input()
  public get disabled(): boolean {
    return this.elementRef.nativeElement.disabled;
  }

  public set disabled(dis: boolean) {
    this.setDisabledState(coerceBooleanProperty(dis));
    this.stateChanges.next();
  }

  public get fileNames(): string {
    return this.value ? this.value.fileNames : this.valuePlaceholder;
  }

  public static nextId = 0;

  public focused = false;
  public controlType = 'file-input';

  @Input()
  public autofilled = false;

  // tslint:disable-next-line:variable-name
  private _placeholder: string;
  // tslint:disable-next-line:variable-name
  private _required = false;

  @Input()
  public valuePlaceholder: string;

  @Input()
  public multiple: boolean;

  @Input()
  public accept: string | null = null;

  @Input()
  public errorStateMatcher: ErrorStateMatcher;

  @HostBinding()
  public id = `lab900-mat-file-field-${MatFileFieldComponent.nextId++}`;

  @HostBinding('attr.aria-describedby')
  public describedBy = '';

  /**
   * @see https://angular.io/api/forms/ControlValueAccessor
   */
  public constructor(
    private fm: FocusMonitor,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    public defaultErrorStateMatcher: ErrorStateMatcher,
    @Optional()
    @Self()
    public ngControl: NgControl,
    @Optional() public parentForm: NgForm,
    @Optional() public parentFormGroup: FormGroupDirective,
  ) {
    super(defaultErrorStateMatcher, parentForm, parentFormGroup, ngControl);

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.addSubscription(fm.monitor(elementRef.nativeElement, true), (origin) => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  public setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  private onChange = (_: any) => {};
  private onTouched = () => {};

  public onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() !== 'input' && !this.disabled) {
      this.elementRef.nativeElement.querySelector('input').focus();
      this.focused = true;
      this.open();
    }
  }

  public writeValue(obj: FileInput | null): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', obj instanceof FileInput ? obj.files : null);
  }

  public registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * Remove all files from the file input component
   */
  public clear(event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.value = new FileInput([]);
    this.elementRef.nativeElement.querySelector('input').value = null;
    this.onChange(this.value);
  }

  @HostListener('change', ['$event'])
  public change(event: Event): void {
    const fileList: FileList | null = (event.target as HTMLInputElement).files;
    const fileArray: File[] = [];
    if (fileList) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < fileList.length; i++) {
        fileArray.push(fileList[i]);
      }
    }
    this.value = new FileInput(fileArray);
    this.onChange(this.value);
  }

  @HostListener('focusout')
  public blur(): void {
    this.focused = false;
    this.onTouched();
  }

  public setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }

  public ngOnInit(): void {
    this.multiple = coerceBooleanProperty(this.multiple);
  }

  public open(): void {
    if (!this.disabled) {
      this.elementRef.nativeElement.querySelector('input').click();
    }
  }

  public ngOnDestroy(): void {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elementRef.nativeElement);
  }

  public ngDoCheck(): void {
    if (this.ngControl) {
      // We need to re-evaluate this on every change detection cycle, because there are some
      // error triggers that we can't subscribe to (e.g. parent form submissions). This means
      // that whatever logic is in here has to be super lean or we risk destroying the performance.
      this.updateErrorState();
    }
  }
}
