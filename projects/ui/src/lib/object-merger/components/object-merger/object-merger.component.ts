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

  public differences: ObjectMergerDifference;

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
            },
          };
        }
      }
    }
  }

  private checkIfDifferenceAlreadyExist(key: string): boolean {
    return !!this.differences[key];
  }
}
