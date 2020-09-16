import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lab900-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss'],
})
export class MomentsComponent {
  @Input()
  public moments: Date[];

  @Output()
  public removeMoment: EventEmitter<Date> = new EventEmitter<Date>();
}
