import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { SelectFieldOptions } from '../../../models/FormField';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lab900-select-field',
  templateUrl: './select-field.component.html',
})
export class SelectFieldComponent extends FormComponent<SelectFieldOptions> implements OnInit, OnDestroy {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public values: { value: any; label: string }[];

  private subscriptions: Subscription[] = [];

  public defaultCompare = (o1: any, o2: any) => o1 === o2;

  public constructor(translateService: TranslateService) {
    super(translateService);
  }

  public ngOnInit(): void {
    this.values = (this.options && this.options.values) || [];
    if (this.options.valuesFn) {
      this.loadValues();
    }
  }

  public loadValues() {
    this.subscriptions.push(this.options.valuesFn().subscribe((values) => (this.values = values)));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((value) => value.unsubscribe());
  }
}
