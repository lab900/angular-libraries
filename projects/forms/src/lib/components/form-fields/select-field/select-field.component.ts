import { Component, HostBinding, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { SelectFieldOptions, ValueLabel } from '../../../models/FormField';
import { TranslateService } from '@ngx-translate/core';
import { isObservable, Observable, of, Subject } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { IFieldConditions } from '../../../models/IFieldConditions';

@Component({
  selector: 'lab900-select-field',
  templateUrl: './select-field.component.html',
})
export class SelectFieldComponent extends FormComponent<SelectFieldOptions> implements OnInit {
  public constructor(translateService: TranslateService) {
    super(translateService);
    this.subs.push(
      this.conditionalChange
        .pipe(switchMap(({ condition, value }) => this.getConditionalOptions(condition, value)))
        .subscribe((options: ValueLabel[]) => {
          this.selectOptions = options;
          this.loading = false;
          if (this.valueBeforeConditionalChange) {
            this.fieldControl.setValue(this.valueBeforeConditionalChange);
          }
        }),
    );
  }

  public get selectedOption(): any {
    if (this.selectOptions && this.fieldControl.value) {
      return this.selectOptions.find((opt) => this.defaultCompare(opt.value, this.fieldControl.value));
    }
    return null;
  }
  private conditionalChange = new Subject();

  @HostBinding('class')
  public classList = 'lab900-form-field';

  public selectOptions: ValueLabel[];

  public loading = true;

  private valueBeforeConditionalChange: any;

  public defaultCompare = (o1: any, o2: any) => o1 === o2;

  public ngOnInit(): void {
    if (this.options?.selectOptions) {
      const selectOptions = this.options?.selectOptions;
      const values = typeof selectOptions === 'function' ? selectOptions() : selectOptions;
      (isObservable(values) ? values : of(values)).pipe(take(1)).subscribe((options: ValueLabel[]) => {
        this.selectOptions = options;
        this.loading = false;
      });
    } else {
      this.selectOptions = [];
      this.loading = false;
    }
  }

  public onConditionalChange(dependOn: string, value: string): void {
    const condition = this.schema.conditions.find((c) => c.dependOn === dependOn);
    if (condition?.conditionalOptions) {
      this.valueBeforeConditionalChange = this.fieldControl.value;
      this.fieldControl.reset();
      this.conditionalChange.next({ condition, value });
    } else {
      this.selectOptions = [];
    }
  }

  private getConditionalOptions(condition: IFieldConditions, value: any): Observable<ValueLabel[]> {
    this.selectOptions = [];
    this.loading = true;
    const values = condition?.conditionalOptions(value);
    return (isObservable(values) ? values : of(values)).pipe(take(1));
  }
}
