import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatInput } from '@angular/material/input';

@Directive({
  selector: '[lab900InputAutofocus]',
})
export class AutofocusDirective implements OnChanges {
  @Input()
  private autofocus = false;

  constructor(private matInput: MatInput) {}

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.autofocus && changes.autofocus.currentValue === true) {
      setTimeout(() => {
        this.matInput.focus();
      });
    }
  }
}
