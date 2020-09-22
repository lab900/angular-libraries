import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { AutocompleteOptions } from '../../../models/FormField';
import { Observable, isObservable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-readonly',
  templateUrl: './readonly-field.component.html',
  styleUrls: ['./readonly-field.component.scss'],
})
export class ReadonlyFieldComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public get value(): any {
    return this.options?.readonlyDisplay
      ? this.options?.readonlyDisplay(this.group.value)
      : this.group.value && this.group.value[this.schema?.attribute];
  }

  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
