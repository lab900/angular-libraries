import { Component, HostBinding, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '../../../models/FormField';

@Component({
  selector: 'lab900-readonly',
  templateUrl: './readonly-field.component.html',
})
export class ReadonlyFieldComponent implements OnDestroy {
  private sub: Subscription;

  @HostBinding('class')
  public classList = 'lab900-form-field';

  @Output()
  public toggleInlineEdit = new EventEmitter<void>();

  @Input()
  public group: FormGroup;

  @Input()
  public schema: FormField<any>;

  @Input()
  public loading: FormField<any>;

  public value: any;

  public constructor(translateService: TranslateService) {
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
    this.value = this.schema?.options?.readonlyDisplay ? this.schema.options.readonlyDisplay(this.group.value) : value;
  }
}
