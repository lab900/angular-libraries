import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { AutocompleteOptions } from '../../../models/FormField';
import { Observable, isObservable, of } from 'rxjs';

@Component({
  selector: 'lab900-autocomplete-field',
  templateUrl: './autocomplete-field.component.html',
})
export class AutocompleteFieldComponent extends FormComponent<AutocompleteOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public filteredOptions: Observable<any[]>;

  public inputChanged($event: Event) {
    const res = this.options.getOptionsFn(($event.target as any).value);
    this.filteredOptions = isObservable(res) ? res : of(res);
  }
}
