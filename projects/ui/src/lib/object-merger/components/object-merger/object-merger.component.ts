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
  public objectsToMerge: MergeObject<T>[];

  public outcome: T;
  public changedFields: object;

  public differences: { [key: string]: MergeDifference<T> };

  public selected: 'left' | 'right' = 'right';

  public fixed = false;

  public ngOnInit(): void {
    if (this.objectsToMerge[0].fixed || this.objectsToMerge[1].fixed) {
      this.fixed = true;
      this.selected = this.objectsToMerge[0].fixed ? 'right' : 'left';
    }

    this.getDifferences();
  }

  private getDifferences(): void {
    if (this.objectsToMerge && this.objectsToMerge.length >= 2) {
      for (const option of this.options) {
        if (this.objectsToMerge[0].data[option.attribute] || this.objectsToMerge[1].data[option.attribute]) {
          this.differences = {
            ...this.differences,
            [option.attribute]: {
              label: option.label,
              right: this.objectsToMerge[0].data[option.attribute],
              left: this.objectsToMerge[1].data[option.attribute],
              active: false,
              hidden:
                JSON.stringify(this.objectsToMerge[0].data[option.attribute]) ===
                JSON.stringify(this.objectsToMerge[1].data[option.attribute]),
              rowClass: option.rowClass,
              formatter: option.formatter,
            },
          };
        }
      }

      this.outcome = this.getBaseObject();
    }
  }

  public switchSelected(value: 'left' | 'right'): void {
    this.selected = value;
    this.outcome = this.getBaseObject();
    Object.keys(this.differences).forEach((key) => {
      this.differences[key].active = false;
    });
  }

  private getBaseObject(): T {
    return this.selected === 'right' ? this.objectsToMerge[0].data : this.objectsToMerge[1].data;
  }

  public toggleKey(attribute: string, value: any): void {
    if (!this.differences[attribute].active) {
      this.outcome = {
        ...this.outcome,
        [attribute]: value,
      };
      this.changedFields = {
        ...this.changedFields,
        [attribute]: value,
      };
    } else {
      this.outcome = {
        ...this.outcome,
        [attribute]: this.getBaseObject()[attribute],
      };
      delete this.changedFields[attribute];
    }

    this.differences[attribute].active = !this.differences[attribute].active;
  }

  public getDisplayValue(attribute: string, difference: MergeDifference, type: 'left' | 'right'): string {
    const value = type === this.selected ? this.outcome[attribute] : difference[type];
    if (difference.formatter) {
      return difference.formatter(value);
    }
    return value;
  }
}
