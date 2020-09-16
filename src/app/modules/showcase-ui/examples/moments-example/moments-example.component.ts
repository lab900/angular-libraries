import { Component } from '@angular/core';

@Component({
  selector: 'lab900-moments-example',
  template: `<lab900-moments
    [moments]="moments"
    (removeMoment)="removeMoment($event)"
    (addMoment)="addMoment($event)"
    [addMomentText]="'ADD.MOMENT' | translate"
  ></lab900-moments>`,
})
export class MomentsExampleComponent {
  public moments: Date[] = [new Date(Date.now())];

  public removeMoment(moment: Date): void {
    this.moments.splice(this.moments.indexOf(moment));
  }

  public addMoment(now: Date): void {
    this.moments.push(now);
  }
}
