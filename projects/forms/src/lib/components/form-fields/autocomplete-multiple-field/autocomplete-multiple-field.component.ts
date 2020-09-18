import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { AutocompleteOptions } from '../../../models/FormField';
import { isObservable, Observable, of } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'lab900-autocomplete-multiple-field',
  templateUrl: './autocomplete-multiple-field.component.html',
})
export class AutocompleteMultipleFieldComponent extends FormComponent<AutocompleteOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  @ViewChild('input') input: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  public filteredOptions: Observable<any[]>;
  public selectedOptions: any[] = []; // ToDo: Set values
  public separatorKeysCodes: number[] = [ENTER, COMMA];

  public inputChanged($event: Event) {
    const res = this.options.getOptionsFn(($event.target as any).value);
    this.filteredOptions = isObservable(res) ? res : of(res);
  }

  public remove(option: any): void {
    const index = this.selectedOptions.indexOf(option);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedOptions.push(event.option.viewValue);
    this.group.controls[this.schema.attribute].setValue(this.selectedOptions);
    this.group.controls[this.schema.attribute].updateValueAndValidity();
    this.input.nativeElement.value = '';
  }
}
