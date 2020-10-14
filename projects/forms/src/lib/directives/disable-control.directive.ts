import { NgControl } from '@angular/forms';
import { Directive, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[lab900DisableControl]',
})
export class DisableControlDirective implements OnChanges {
  @Input()
  private disableControl: boolean;

  constructor(private ngControl: NgControl) {}

  ngOnChanges(changes) {
    if (changes.disableControl) {
      const action = this.disableControl ? 'disable' : 'enable';
      this.ngControl.control[action]();
    }
  }
}
