import { Component, Input, OnInit } from '@angular/core';
import { MergeOption } from '../../models/merge-option.model';
import { MergeObject } from '../../models/merge-object.model';
import { MergeDifference } from '../../models/merge-difference.model';

@Component({
  selector: 'lab900-object-merger',
  templateUrl: './object-merger.component.html',
  styleUrls: ['./object-merger.component.scss'],
})
export class Lab900ObjectMergerComponent implements OnInit {
  @Input()
  public options: MergeOption[];

  @Input()
  public mergeObjectA: MergeObject;

  @Input()
  public mergeObjectB: MergeObject;

  public outcome: object;

  public differences: { [key: string]: MergeDifference };

  public baseObject: 'primary' | 'secondary' = 'primary';

  public ngOnInit(): void {
    this.getDifferences();
  }

  private getDifferences(): void {
    for (const option of this.options) {
      if (
        (this.mergeObjectA.data[option.attribute] || this.mergeObjectB.data[option.attribute]) &&
        this.mergeObjectA.data[option.attribute] !== this.mergeObjectB.data[option.attribute]
      ) {
        this.differences = {
          ...this.differences,
          [option.attribute]: {
            label: option.label,
            primary: this.mergeObjectA.data[option.attribute],
            secondary: this.mergeObjectB.data[option.attribute],
            active: true,
          },
        };
      }
    }
  }

  private getBaseObject(): object {
    return this.baseObject === 'primary' ? this.mergeObjectA : this.mergeObjectB;
  }

  public setBase(value: 'primary' | 'secondary'): void {
    this.baseObject = value;
    this.outcome = this.getBaseObject();
    Object.keys(this.differences).forEach((key) => {
      this.differences[key].active = true;
    });
  }

  public toggleKey(attribute: string, value: any, active: boolean): void {
    this.outcome = {
      ...this.outcome,
      [attribute]: active ? value : this.getBaseObject()[attribute],
    };

    this.differences[attribute].active = !this.differences[attribute].active;
  }
}
