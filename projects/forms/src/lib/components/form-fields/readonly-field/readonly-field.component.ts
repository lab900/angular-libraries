import { Component, HostBinding, OnDestroy } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-readonly',
  templateUrl: './readonly-field.component.html',
})
export class ReadonlyFieldComponent extends FormComponent implements OnDestroy {
  private sub: Subscription;

  @HostBinding('class')
  public classList = 'lab900-form-field';

  public value: any;

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
    setTimeout(() => {
      if (this.group?.controls) {
        this.setValue(this.group.controls[this.schema.attribute].value);
        this.sub = this.group.controls[this.schema.attribute].valueChanges.subscribe((value: any) =>
          setTimeout(() => this.setValue(value)),
        );
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
