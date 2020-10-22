import { Component, OnInit, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { SelectFieldOptions, ValueLabel } from '../../../models/FormField';
import { TranslateService } from '@ngx-translate/core';
import { isObservable, Observable, of } from 'rxjs';

@Component({
  selector: 'lab900-select-field',
  templateUrl: './select-field.component.html',
})
export class SelectFieldComponent extends FormComponent<SelectFieldOptions> implements OnInit {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public options$: Observable<ValueLabel[]>;

  public defaultCompare = (o1: any, o2: any) => o1 === o2;

  public constructor(translateService: TranslateService) {
    super(translateService);
  }

  public ngOnInit(): void {
    if (this.options?.selectOptions) {
      const options = this.options?.selectOptions;
      const values = typeof options === 'function' ? options() : options;
      this.options$ = isObservable(values) ? values : of(values);
    } else {
      throw new Error('No options provided');
    }
  }
}
