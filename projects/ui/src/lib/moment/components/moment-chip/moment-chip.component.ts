import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lab900-moment-chip',
  templateUrl: './moment-chip.component.html',
  styleUrls: ['./moment-chip.component.scss'],
})
export class MomentChipComponent implements OnInit {
  @Input()
  public moment: Date;

  @Output()
  public remove: EventEmitter<Date> = new EventEmitter<Date>();

  public formattedDate: string;

  ngOnInit(): void {
    this.formattedDate = `${this.moment.getDate()}/${this.moment.getMonth()}/${this.moment.getFullYear()} - ${this.moment.getHours()}:${this.moment.getMinutes()}`;
  }
}
