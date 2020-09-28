import { Component, Input, OnInit } from '@angular/core';
import { ObjectMergerObjects } from '../../models/object-merger-objects';
import { ObjectMergerDifference } from '../../models/object-merger-difference';

@Component({
  selector: 'lab900-object-merger',
  templateUrl: './object-merger.component.html',
  styleUrls: ['./object-merger.component.scss'],
})
export class Lab900ObjectMergerComponent implements OnInit {
  @Input()
  private objectsToMerge: ObjectMergerObjects;

  public mergedObject: object;

  public differences: ObjectMergerDifference;

  public basis: 'primary' | 'secondary' = 'primary';

  public ngOnInit(): void {
    this.getDifferences();
  }

  private getDifferences(): void {
    for (const [key, value] of Object.entries(this.objectsToMerge.primary)) {
      if (this.objectsToMerge.secondary[key] !== value) {
        this.differences = {
          ...this.differences,
          [key]: {
            primary: value,
            secondary: this.objectsToMerge.secondary[key],
            active: true,
          },
        };
      }
    }

    for (const [key, value] of Object.entries(this.objectsToMerge.secondary)) {
      if (this.objectsToMerge.primary[key] !== value) {
        if (!this.checkIfDifferenceAlreadyExist(key)) {
          this.differences = {
            ...this.differences,
            [key]: {
              primary: value,
              secondary: this.objectsToMerge.primary[key],
              active: true,
            },
          };
        }
      }
    }

    this.mergedObject = this.getBaseObject();
  }

  private checkIfDifferenceAlreadyExist(key: string): boolean {
    return !!this.differences[key];
  }

  public setBasis(value: 'primary' | 'secondary'): void {
    this.basis = value;
    this.mergedObject = this.getBaseObject();
  }

  public toggleKey(key: string, value: any, active: boolean): void {
    this.mergedObject = {
      ...this.mergedObject,
      [key]: active ? value : this.getBaseObject()[key],
    };

    this.differences[key].active = !this.differences[key].active;
  }

  private getBaseObject(): object {
    return this.basis === 'primary' ? this.objectsToMerge.secondary : this.objectsToMerge.primary;
  }
}
