import { Component, HostBinding, OnDestroy } from '@angular/core';
import { FormComponent } from '../../AbstractFormComponent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-readonly',
  templateUrl: './readonly-field.component.html',
})
export class ReadonlyFieldComponent extends FormComponent implements OnDestroy {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public value: any;

  public constructor(translateService: TranslateService) {
    super(translateService);
    setTimeout(() => {
      if (this.group?.controls) {
        this.setValue(this.group.controls[this.schema.attribute].value);
        this.addSubscription(
          this.group.controls[this.schema.attribute].valueChanges,
          (value: any) => setTimeout(() => this.setValue(value))
        );
      }
    });
  }

  private setValue(value: any): void {
    this.value = this.options?.readonlyDisplay
      ? this.options?.readonlyDisplay(this.group.value)
      : value;
  }
}
