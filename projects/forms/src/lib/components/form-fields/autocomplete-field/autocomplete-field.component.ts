import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { AutocompleteOptions, ValueLabel } from '../../../models/FormField';
import { Observable, isObservable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-autocomplete-field',
  templateUrl: './autocomplete-field.component.html',
})
export class AutocompleteFieldComponent extends FormComponent<AutocompleteOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public filteredOptions: Observable<ValueLabel[]>;

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }

  public inputChanged($event: Event): void {
    const res = this.options.autocompleteOptions(($event.target as any).value);
    this.filteredOptions = isObservable(res) ? res : of(res);
  }
}
