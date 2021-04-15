import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { AutocompleteOptions, ValueLabel } from '../../../models/FormField';
import { isObservable, Observable, of } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-autocomplete-multiple-field',
  templateUrl: './autocomplete-multiple-field.component.html',
})
export class AutocompleteMultipleFieldComponent extends FormComponent<AutocompleteOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  @ViewChild('input')
  private input: ElementRef<HTMLInputElement>;
  @ViewChild('auto')
  private matAutocomplete: MatAutocomplete;

  public filteredOptions: Observable<ValueLabel[]>;
  public separatorKeysCodes: number[] = [ENTER, COMMA];

  public get selectedOptions(): any[] {
    return this.group.controls[this.schema.attribute]?.value ?? [];
  }

  public constructor(translateService: TranslateService) {
    super(translateService);
  }

  public inputChanged($event: Event): void {
    const res = this.options.autocompleteOptions(($event.target as any).value, this.fieldControl);
    this.filteredOptions = isObservable(res) ? res : of(res);
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
