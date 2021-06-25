import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormComponent } from '../../AbstractFormComponent';
import { BehaviorSubject, isObservable, Observable, of } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ValueLabel } from '../../../models/form-field-base';
import { FormFieldAutocompleteMulti } from './autocomplete-multiple-field.model';

@Component({
  selector: 'lab900-autocomplete-multiple-field',
  templateUrl: './autocomplete-multiple-field.component.html',
})
export class AutocompleteMultipleFieldComponent extends FormComponent<FormFieldAutocompleteMulti> implements AfterViewInit {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  @ViewChild('input')
  private input: ElementRef<HTMLInputElement>;
  @ViewChild('auto')
  private matAutocomplete: MatAutocomplete;

  public filteredOptions: Observable<ValueLabel[]>;
  public separatorKeysCodes: number[] = [ENTER, COMMA];

  public inputChange: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public get selectedOptions(): any[] {
    return this.group.controls[this.schema.attribute]?.value ?? [];
  }

  public constructor(translateService: TranslateService) {
    super(translateService);
  }

  public ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.initFilteredOptionsListener();
  }

  public inputChanged($event: Event): void {
    this.inputChange.next(($event.target as any).value);
  }

  private initFilteredOptionsListener(): void {
    const debounce: number = this.options.debounceTime ?? (isObservable(this.options.autocompleteOptions('', this.fieldControl)) ? 300 : 0);
    this.filteredOptions = this.inputChange.pipe(
      debounceTime(debounce),
      switchMap((input: string) => {
        const res = this.options.autocompleteOptions(input, this.fieldControl);
        return isObservable(res) ? res : of(res);
      }),
    );
  }

  public remove(index: number): void {
    if (index >= 0) {
      const value = this.selectedOptions;
      value.splice(index, 1);
      this.updateControlValue(value);
      this.input.nativeElement.value = '';
    }
  }

  public selected(event: MatAutocompleteSelectedEvent): void {
    const value = this.selectedOptions;
    value.push(event.option.value);
    this.updateControlValue(value);
    this.input.nativeElement.value = '';
    this.group.markAsDirty();
  }

  private updateControlValue(val: any[]): void {
    this.group.controls[this.schema.attribute].setValue(val);
    this.group.controls[this.schema.attribute].updateValueAndValidity();
    this.group.controls[this.schema.attribute].markAsDirty();
    this.group.controls[this.schema.attribute].markAsTouched();
  }
}
