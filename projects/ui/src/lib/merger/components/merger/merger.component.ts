import { Component, Input, OnInit } from '@angular/core';
import { MergeObject } from '../../models/merge-object.model';
import { MergeConfig } from '../../models/merge-config.model';
import * as _ from 'lodash';

@Component({
  selector: 'lab900-merger',
  templateUrl: './merger.component.html',
  styleUrls: ['./merger.component.scss'],
})
export class Lab900MergerComponent<T> implements OnInit {
  @Input()
  public readonly leftObject: MergeObject<T>;

  @Input()
  public readonly rightObject: MergeObject<T>;

  @Input()
  public schema: MergeConfig<T>[];

  @Input()
  public fixed = false;

  @Input()
  public loading: boolean;

  public selected: 'left' | 'right' = 'right';

  public result: T;

  public changes: any;

  public ngOnInit(): void {
    this.loading = !this.leftObject || !this.rightObject || !this.schema;
    this.result = { ...this.rightObject.data };
    this.schema.forEach((s) => {
      if (s.active) {
        this.result[s.attribute] = this.getBase(s.active)[s.attribute];
        this.changes = {
          ...this.changes,
          [s.attribute]: this.getBase(s.active)[s.attribute],
        };
      }
    });
  }

  public reset(): void {
    this.result = { ...this.getBase() };
    this.changes = {};
    this.schema.forEach((s, index) => {
      if (s.active) {
        this.schema[index].active = false;
      }
    });
  }

  public compare(attribute: string): boolean {
    return !_.isEqual(
      Array.isArray(this.leftObject.data[attribute]) ? _.sortBy(this.leftObject.data[attribute]) : this.leftObject.data[attribute],
      Array.isArray(this.rightObject.data[attribute]) ? _.sortBy(this.rightObject.data[attribute]) : this.rightObject.data[attribute],
    );
  }

  private getBase(revert = false): T {
    if (revert) {
      return this.selected === 'right' ? this.leftObject.data : this.rightObject.data;
    }
    return this.selected === 'right' ? this.rightObject.data : this.leftObject.data;
  }

  public toggleActive({ attribute, active }: MergeConfig<T>): void {
    const base: T = this.getBase(!active);
    if (active) {
      delete this.changes[attribute];
    } else {
      this.changes = { ...this.changes, [attribute]: base[attribute] };
    }
    this.result[attribute] = base[attribute];

    const configIndex = this.schema.findIndex((s) => s.attribute === attribute);
    this.schema[configIndex] = { ...this.schema[configIndex], active: !active };
  }

  public switchMaster(): void {
    this.selected = this.selected === 'right' ? 'left' : 'right';
    this.reset();
  }
}
