import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { AutocompleteOptions } from '../../../models/FormField';
import { Observable, isObservable, of } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'lab900-autocomplete-multiple-field',
  templateUrl: './autocomplete-multiple-field.component.html',
})
export class AutocompleteMultipleFieldComponent extends FormComponent<AutocompleteOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  @ViewChild('input') input: ElementRef<HTMLInputElement>;

  public filteredOptions: Observable<any[]>;
  public selectedOptions: any[];

  public inputChanged($event: Event) {
    const res = this.options.getOptionsFn(($event.target as any).value);
    this.filteredOptions = isObservable(res) ? res : of(res);
  }

  public add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.selectedOptions.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  public remove(option: any): void {
    const index = this.selectedOptions.indexOf(option);

    if (index >= 0) {
      this.selectedOptions.splice(index, 1);
    }
  }
}
