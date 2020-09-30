import { Component, Input, OnInit } from '@angular/core';
import { MergeOption } from '../../models/merge-option.model';
import { MergeObject } from '../../models/merge-object.model';
import { MergeDifference } from '../../models/merge-difference.model';
import { isObservable, Observable, of } from 'rxjs';

@Component({
  selector: 'lab900-object-merger',
  templateUrl: './object-merger.component.html',
  styleUrls: ['./object-merger.component.scss'],
})
export class Lab900ObjectMergerComponent<T> implements OnInit {
  @Input()
  public options: MergeOption<T>[];

  @Input()
  public objectsToMerge: MergeObject<T>[];

  public outcome: T;

  public differences: { [key: string]: MergeDifference<T> };

  public selectedIndex = 0;

  public ngOnInit(): void {
    this.getDifferences();
  }

  private getDifferences(): void {
    if (this.objectsToMerge && this.objectsToMerge.length >= 2) {
      for (const option of this.options) {
        if (
          (this.objectsToMerge[0].data[option.attribute] || this.objectsToMerge[1].data[option.attribute]) &&
          this.objectsToMerge[0].data[option.attribute] !== this.objectsToMerge[1].data[option.attribute]
        ) {
          this.differences = {
            ...this.differences,
            [option.attribute]: {
              label: option.label,
              primary: this.objectsToMerge[0].data[option.attribute],
              secondary: this.objectsToMerge[1].data[option.attribute],
              active: true,
              rowClass: option.rowClass,
              formatter: option.formatter,
            },
          };
        }
      }

      this.outcome = this.objectsToMerge[0].data;
    }
  }

  public switchSelectedIndex(value: 0 | 1): void {
    this.selectedIndex = value;
    this.outcome = this.getBaseObject();
    Object.keys(this.differences).forEach((key) => {
      this.differences[key].active = true;
    });
  }

  private getBaseObject(): T {
    return this.selectedIndex === 0 ? this.objectsToMerge[0].data : this.objectsToMerge[1].data;
  }

  public toggleKey(attribute: string, value: any): void {
    if (this.differences[attribute].active) {
      this.outcome = {
        ...this.outcome,
        [attribute]: value,
      };
    } else {
      this.outcome = {
        ...this.outcome,
        [attribute]: this.getBaseObject()[attribute],
      };
    }

    this.differences[attribute].active = !this.differences[attribute].active;
  }

  public getFormattedData(formatter: (data: T) => string | Observable<string>, value: T): Observable<string> {
    const formattedValue = formatter(value);
    return isObservable(formattedValue) ? formattedValue : of(formattedValue);
  }
}
