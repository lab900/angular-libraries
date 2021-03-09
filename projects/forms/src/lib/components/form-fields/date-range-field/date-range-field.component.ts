import { Component, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { DateRangePickerFieldOptions } from '../../../models/FormField';
import { FormGroup } from '@angular/forms';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-date-field',
  templateUrl: './date-range-field.component.html',
})
export class DateRangeFieldComponent extends FormComponent<DateRangePickerFieldOptions> {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }

  public get dateFormGroup(): FormGroup {
    return this.group.get(this.schema.attribute) as FormGroup;
  }

  public get maxDate(): Date | null {
    return this.options?.maxDate;
  }

  public get minDate(): Date | null {
    return this.schema?.options?.minDate;
  }
}
