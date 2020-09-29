import { Component, Input, OnInit } from '@angular/core';
import { MergeOption } from '../../models/merge-option.model';
import { MergeObject } from '../../models/merge-object.model';
import { MergeDifference } from '../../models/merge-difference.model';

@Component({
  selector: 'lab900-object-merger',
  templateUrl: './object-merger.component.html',
  styleUrls: ['./object-merger.component.scss'],
})
export class Lab900ObjectMergerComponent<T> implements OnInit {
  @Input()
  public options: MergeOption<T>[];

  @Input()
  public objectsToMerge: { primary: MergeObject<T>; secondary: MergeObject<T> };

  public outcome: T;

  public differences: { [key: string]: MergeDifference<T> };

  public baseObject: 'primary' | 'secondary' = 'primary';

  public ngOnInit(): void {
    this.getDifferences();
  }

  private getDifferences(): void {
    for (const option of this.options) {
      if (
        (this.objectsToMerge.primary.data[option.attribute] || this.objectsToMerge.secondary.data[option.attribute]) &&
        this.objectsToMerge.primary.data[option.attribute] !== this.objectsToMerge.secondary.data[option.attribute]
      ) {
        this.differences = {
          ...this.differences,
          [option.attribute]: {
            label: option.label,
            primary: this.objectsToMerge.primary.data[option.attribute],
            secondary: this.objectsToMerge.secondary.data[option.attribute],
            active: true,
            rowClass: option.rowClass,
            formatter: option.formatter,
          },
        };
      }
    }

    this.outcome = this.objectsToMerge.primary.data;
  }

  public setBaseObject(value: 'primary' | 'secondary'): void {
    this.baseObject = value;
    this.outcome = this.getBaseObject();
    Object.keys(this.differences).forEach((key) => {
      this.differences[key].active = true;
    });
  }

  private getBaseObject(): T {
    return this.baseObject === 'primary' ? this.objectsToMerge.primary.data : this.objectsToMerge.secondary.data;
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
        [attribute]: this.baseObject === this.getBaseObject()[attribute],
      };
    }

    this.differences[attribute].active = !this.differences[attribute].active;
  }
}
