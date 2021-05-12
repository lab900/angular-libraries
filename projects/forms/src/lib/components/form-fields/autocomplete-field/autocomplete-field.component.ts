import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { AutocompleteOptions, ValueLabel } from '../../../models/FormField';
import { Observable, isObservable, of, fromEvent } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { logger } from 'codelyzer/util/logger';

@Component({
  selector: 'lab900-autocomplete-field',
  templateUrl: './autocomplete-field.component.html',
})
export class AutocompleteFieldComponent extends FormComponent<AutocompleteOptions> implements AfterViewInit {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  @ViewChild('input')
  public autoCompleteInput: ElementRef;

  public filteredOptions: Observable<ValueLabel[]>;

  public constructor(translateService: TranslateService) {
    super(translateService);
  }

  public ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.initFilteredOptionsListener();
  }

  private initFilteredOptionsListener(): void {
    const debounce: number = this.options.debounceTime ?? (isObservable(this.options.autocompleteOptions('', this.fieldControl)) ? 300 : 0);
    this.filteredOptions = fromEvent(this.autoCompleteInput.nativeElement, 'keyup').pipe(
      debounceTime(debounce),
      distinctUntilChanged(),
      switchMap((input: Event) => {
        const res = this.options.autocompleteOptions((input.target as any).value, this.fieldControl);
        return isObservable(res) ? res : of(res);
      }),
    );
  }
}
