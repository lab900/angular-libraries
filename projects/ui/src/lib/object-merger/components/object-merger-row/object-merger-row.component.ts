import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab900-object-merger-row',
  templateUrl: './object-merger-row.component.html',
  styleUrls: ['./object-merger-row.component.scss'],
})
export class Lab900ObjectMergerRowComponent {
  @Input()
  public customClass?: string;
}
