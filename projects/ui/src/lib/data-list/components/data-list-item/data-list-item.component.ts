import { Component, Input } from '@angular/core';
import { DataListSharing } from '../../models/data-list.model';
import { Lab900DataListItemInfoDirective } from '../../directives/data-list-item-info.directive';
import { ActionButton } from '../../../button/models/action-button.model';

@Component({
  selector: 'lab900-data-list-item',
  templateUrl: './data-list-item.component.html',
  styleUrls: ['./data-list-item.component.scss'],
})
export class Lab900DataListItemComponent {
  @Input()
  public data: any;

  @Input()
  public actions: ActionButton[] = [];

  @Input()
  public dataListItemInfoTemplate?: Lab900DataListItemInfoDirective;

  @Input()
  public dataListSharing?: DataListSharing;
}
