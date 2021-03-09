import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { DatepickerFieldOptions } from '../../../models/FormField';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-date-field',
  templateUrl: './date-field.component.html',
})
export class DateFieldComponent extends FormComponent<DatepickerFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }

  public get startView(): 'month' | 'year' | 'multi-year' {
    return this.schema?.options?.startView ?? 'month';
  }

  public get maxDate(): Date | null {
    return this.schema?.options?.maxDate;
  }

  public get minDate(): Date | null {
    return this.schema?.options?.minDate;
  }
}
