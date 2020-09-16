import { Component } from '@angular/core';

@Component({
  selector: 'lab900-moment-container',
  templateUrl: './moment-container.component.html',
  styleUrls: ['./moment-container.component.scss'],
})
export class MomentContainerComponent {
  public moments: Date[] = [new Date(Date.now()), new Date(Date.now())];
}
