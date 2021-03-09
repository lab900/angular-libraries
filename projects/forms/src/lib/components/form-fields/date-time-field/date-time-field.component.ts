import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { DatepickerFieldOptions } from '../../../models/FormField';

@Component({
  selector: 'lab900-date-time-field',
  templateUrl: './date-time-field.component.html',
})
export class DateTimeFieldComponent extends FormComponent<DatepickerFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(translateService: TranslateService) {
    super(translateService);
  }

  public get startView(): 'month' | 'year' | 'multi-year' {
    return this.schema?.options?.startView ?? 'month';
  }

  public get maxDate(): Date | null {
    return this.options?.maxDate;
  }

  public get showSeconds(): boolean {
    return this.options?.showSeconds ?? true;
  }

  public get minDate(): Date | null {
    return this.schema?.options?.minDate;
  }

  public get defaultTime(): [number, number, number] | null {
    return this.schema?.options?.defaultTime;
  }

  public get stepMinute(): number | 1 {
    return this.schema?.options?.stepMinute || 1;
  }
}
