import { Component, ViewChild } from '@angular/core';
import { mergerDataExample } from './config/merger-data-example';
import { MergeObject } from '../../../../../../projects/ui/src/lib/merger/models/merge-object.model';
import { MergeConfig } from '../../../../../../projects/ui/src/lib/merger/models/merge-config.model';
import { mergerSchemaExample } from './config/merger-schema-example';
import { Lab900MergerComponent } from '../../../../../../projects/ui/src/lib/merger/components/merger/merger.component';
import { MergerDataExample } from './models/merger-data-example.model';

@Component({
  selector: 'lab900-merger-example',
  template: `
    <div fxLayoutAlign="flex-end center" style="margin-bottom: 1rem">
      <button mat-flat-button color="primary" (click)="mergerComponent.reset()">{{ 'reset' | translate }}</button>
    </div>
    <lab900-merger [leftObject]="exampleData[0]" [rightObject]="exampleData[1]" [schema]="exampleSchema"></lab900-merger>
    <div fxLayoutAlign="center center" style="margin-top: 2rem">
      <button style="margin-right: 1rem" mat-raised-button color="primary" (click)="showResult()">Log Result</button>
      <button mat-raised-button color="warn" (click)="showChanges()">Log Changes</button>
    </div>
  `,
})
export class MergerExampleComponent {
  public exampleData: MergeObject<MergerDataExample>[] = mergerDataExample;
  public exampleSchema: MergeConfig<MergerDataExample>[] = mergerSchemaExample;

  @ViewChild(Lab900MergerComponent)
  public mergerComponent: Lab900MergerComponent<MergerDataExample>;

  public showResult(): void {
    console.log(this.mergerComponent.result);
  }

  public showChanges(): void {
    console.log(this.mergerComponent.changes);
  }
}
