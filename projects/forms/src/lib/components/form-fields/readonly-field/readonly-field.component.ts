import { Component, HostBinding, OnDestroy } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FieldOptions, SelectFieldOptions } from '../../../models/FormField';
import { EditType } from '../../../models/editType';

@Component({
  selector: 'lab900-readonly',
  templateUrl: './readonly-field.component.html',
  styleUrls: ['./readonly-field.component.scss'],
})
export class ReadonlyFieldComponent extends FormComponent<SelectFieldOptions & FieldOptions> implements OnDestroy {
  private sub: Subscription;

  @HostBinding('class')
  public classList = 'lab900-form-field';

  public value: any;

  public constructor(translateService: TranslateService) {
    super(translateService);
    setTimeout(() => {
      if (this.group?.controls) {
        this.setValue(this.group.controls[this.schema.attribute].value);

        console.log('bingo');

        if (this.schema.editType === EditType.Select) {
          if (this.schema.options?.valuesFn) {
            this.sub = this.schema.options.valuesFn().subscribe((items) => {
              const value = items.find((listItem) => (listItem.value = this.group.controls[this.schema.attribute].value));
              if (value) {
                this.setValue(value.label);
              }
            });
          }

          if (this.schema.options?.values) {
            const value = this.schema.options.values.find(
              (listItem) => (listItem.value = this.group.controls[this.schema.attribute].value),
            );
            if (value?.label) {
              this.setValue(value.label);
            }
          }
        }

        // This does not do anything?
        /*        this.sub = this.group.controls[this.schema.attribute].valueChanges.subscribe((value: any) =>
          setTimeout(() => this.setValue(value)),
        );*/
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  private setValue(value: any): void {
    this.value = this.options?.readonlyDisplay ? this.options?.readonlyDisplay(this.group.value) : value;
  }
}
