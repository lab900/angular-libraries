import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lab900-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.scss'],
})
export class MomentsComponent {
  @Input()
  public moments: Date[];

  @Input()
  addMomentText: string;

  @Output()
  public removeMoment: EventEmitter<Date> = new EventEmitter<Date>();

  @Output()
  public addMoment: EventEmitter<Date> = new EventEmitter<Date>();

  private digits(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  public addCurrentMoment(): void {
    this.addMoment.emit(new Date(Date.now()));
  }

  public getFormattedDate(moment: Date): string {
    return `${this.digits(moment.getDate())}/${this.digits(moment.getMonth())}/${moment.getFullYear()} - ${this.digits(
      moment.getHours(),
    )}:${this.digits(moment.getMinutes())}:${this.digits(moment.getSeconds())}`;
  }
}
