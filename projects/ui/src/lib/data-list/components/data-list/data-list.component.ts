import { Component, Input, TemplateRef, ContentChild, Output, EventEmitter } from '@angular/core';
import { Lab900DataListEmptyDirective } from '../../directives/data-list-empty.directive';
import { DataListSharing } from '../../models/data-list.model';
import { Lab900DataListItemInfoDirective } from '../../directives/data-list-item-info.directive';
import { PageEvent } from '@angular/material/paginator';
import { Paging } from '../../../common/models/paging.model';
import { ActionButton } from '../../../button/models/action-button.model';

@Component({
  selector: 'lab900-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class Lab900DataListComponent {
  @Input()
  public data: any[];

  @Input()
  public loading = false;

  @Input()
  public emptyListLabel = 'No data available';

  @Input()
  public actions: ActionButton[] = [];

  @Input()
  public dataListSharing?: DataListSharing;

  @Input()
  public paging?: Paging;

  @ContentChild(Lab900DataListEmptyDirective, { read: TemplateRef })
  public emptyListTemplate?: Lab900DataListEmptyDirective;

  @ContentChild(Lab900DataListItemInfoDirective, { read: TemplateRef })
  public dataListItemInfoTemplate?: Lab900DataListItemInfoDirective;

  @Output()
  public readonly pageChange: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();
}
