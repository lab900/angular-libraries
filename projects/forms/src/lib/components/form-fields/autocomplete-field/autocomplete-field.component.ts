import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { AutocompleteOptions, ValueLabel } from '../../../models/FormField';
import { BehaviorSubject, isObservable, Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { debounceTime, switchMap } from 'rxjs/operators';

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

  public inputChange: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public constructor(translateService: TranslateService) {
    super(translateService);
  }

  public ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.initFilteredOptionsListener();
  }

  public inputChanged($event: Event): void {
    this.inputChange.next(($event.target as any).value);
  }

  private initFilteredOptionsListener(): void {
    const debounce: number = this.options.debounceTime ?? (isObservable(this.options.autocompleteOptions('', this.fieldControl)) ? 300 : 0);
    this.filteredOptions = this.inputChange.pipe(
      debounceTime(debounce),
      switchMap((input: string) => {
        const res = this.options.autocompleteOptions(input, this.fieldControl);
        return isObservable(res) ? res : of(res);
      }),
    );
  }
}
