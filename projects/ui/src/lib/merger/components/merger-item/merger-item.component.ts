import { Component, Input } from '@angular/core';
import { MergeConfig } from '../../models/merge-config.model';
import { isObservable, Observable, of } from 'rxjs';

@Component({
  selector: 'lab900-merger-item',
  templateUrl: './merger-item.component.html',
})
export class Lab900MergerItemComponent {
  @Input()
  public config: MergeConfig;

  @Input()
  private value: any;

  @Input()
  public active: boolean;

  public display(): Observable<any> {
    const formattedValue = this.config?.formatter ? this.config.formatter(this.value) : this.value;
    return isObservable(formattedValue) ? formattedValue : of(formattedValue);
  }
}
