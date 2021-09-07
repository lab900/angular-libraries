import { Component, HostBinding, OnInit } from '@angular/core';
import { FormComponent } from '../../AbstractFormComponent';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, isObservable, of, Subject } from 'rxjs';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';
import {
  FormFieldSelect,
  FormFieldSelectOptionsFilter,
  FormFieldSelectOptionsFn,
} from './field-select.model';
import { ValueLabel } from '../../../models/form-field-base';
import { coerceArray } from '@lab900/ui';
import { IFieldConditions } from '../../../models/IFieldConditions';

@Component({
  selector: 'lab900-select-field',
  templateUrl: './select-field.component.html',
})
export class SelectFieldComponent
  extends FormComponent<FormFieldSelect>
  implements OnInit
{
  /*
   * When conditional options are used for this select, keep the previously selected item
   * and select it again when the new valuelist is loaded
   */
  private conditionalItemToSelectWhenExists: any;

  private conditionalOptionsChange = new Subject<{
    condition: IFieldConditions;
    value: string;
  }>();
  private optionsFn$ = new BehaviorSubject<FormFieldSelectOptionsFn>(() => []);
  public optionsFilter$ =
    new BehaviorSubject<FormFieldSelectOptionsFilter | null>(null);

  @HostBinding('class')
  public classList = 'lab900-form-field';

  public selectOptions: ValueLabel[];

  public loading = true;

  public get selectedOption(): any {
    if (this.selectOptions && this.fieldControl.value) {
      return this.selectOptions.find((opt) =>
        this.options?.compareWith
          ? this.options?.compareWith(opt.value, this.fieldControl.value)
          : this.defaultCompare(opt.value, this.fieldControl.value)
      );
    }
    return null;
  }

  public constructor(translateService: TranslateService) {
    super(translateService);
  }

  public defaultCompare = (o1: any, o2: any): boolean => o1 === o2;

  public ngOnInit(): void {
    if (this.options?.selectOptions) {
      const { selectOptions } = this.options;
      this.updateOptionsFn(
        typeof selectOptions === 'function'
          ? selectOptions
          : () => selectOptions
      );
    }

    this.addSubscription(
      this.conditionalOptionsChange,
      ({ condition, value }) => {
        this.updateOptionsFn((f) =>
          condition?.conditionalOptions(value, this.fieldControl, f)
        );
      }
    );

    this.addSubscription(
      this.optionsFilter$.pipe(
        filter(() => !!this.optionsFn$.value),
        tap(() => (this.loading = true)),
        switchMap((optionsFilter) =>
          this.optionsFn$.pipe(
            take(1),
            switchMap((getOptions) => {
              const values = getOptions(optionsFilter);
              return (isObservable(values) ? values : of(values)).pipe(
                catchError(() => of([]))
              );
            })
          )
        )
      ),
      (options) => {
        const compare = this.options?.compareWith || this.defaultCompare;

        if (this.optionsFilter$.value?.page > 0) {
          /**
           * concat options for infinite scroll
           * duplicates are filtered out (can happen because of the option add)
           */
          this.selectOptions = this.selectOptions.concat(
            options.filter((o) =>
              this.selectOptions.some((so) => compare(o, so))
            )
          );
        } else {
          this.selectOptions = options;
        }

        if (this.conditionalItemToSelectWhenExists) {
          const value = coerceArray(this.conditionalItemToSelectWhenExists);
          const compare = this.options?.compareWith || this.defaultCompare;
          const inOptions = this.selectOptions.some((o) =>
            value.some((v) => compare(o.value, v))
          );
          if (inOptions) {
            this.fieldControl.setValue(this.conditionalItemToSelectWhenExists);
          }
        }

        /**
         * with infinite scroll & searching the form control value(s) might not always be present in the options
         * this will cause the select to appear empty while it has values.
         * to salve this we add the form values to the options
         */
        if (this.fieldControl?.value) {
          const value = coerceArray(this.fieldControl.value);
          const compare = this.options?.compareWith || this.defaultCompare;
          const inOptions = this.selectOptions.some((o) =>
            value.some((v) => compare(o.value, v))
          );
          if (!inOptions) {
            this.selectOptions = value
              .map((v) => ({
                value: v,
                label: this.options?.displayOptionFn
                  ? this.options.displayOptionFn(v)
                  : v,
              }))
              .concat(this.selectOptions);
          }
        }

        this.loading = false;
      }
    );
  }

  public onConditionalChange(
    dependOn: string,
    value: string,
    firstRun: boolean
  ): void {
    setTimeout(() => {
      const condition = this.schema.conditions.find((c) =>
        (Array.isArray(c.dependOn) ? c.dependOn : [c.dependOn]).includes(
          dependOn
        )
      );
      if (condition?.conditionalOptions) {
        if (!firstRun || !value) {
          if (this.fieldControl?.value) {
            this.conditionalItemToSelectWhenExists = this.fieldControl?.value;
          }
          this.fieldControl.reset();
        }
        // When conditional has no value, this field is disabled. No need to fetch the options yet.
        if (!condition.enableIfHasValue || this.fieldControl?.enabled) {
          this.conditionalOptionsChange.next({ condition, value });
        }
      }
    });
  }

  public onScroll(): void {
    if (this.options?.infiniteScroll?.enabled && !this.loading) {
      const currentFilter = this.optionsFilter$.value;
      this.optionsFilter$.next({
        ...currentFilter,
        page: currentFilter.page + 1,
      });
    }
  }

  public onSearch(searchQuery: string): void {
    if (this.options?.search?.enabled) {
      this.optionsFilter$.next({ searchQuery, page: 0 });
    }
  }

  private updateOptionsFn(optionsFn: FormFieldSelectOptionsFn): void {
    this.optionsFn$.next(optionsFn);
    this.optionsFilter$.next({ page: 0, searchQuery: '' });
  }
}
