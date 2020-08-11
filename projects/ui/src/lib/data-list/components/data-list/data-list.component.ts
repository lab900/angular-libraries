import { Component, Input, TemplateRef, ContentChild } from '@angular/core';
import { Lab900DataListEmptyDirective } from '../../directives/data-list-empty.directive';
import { DataListItemAction } from '../../models/data-list.model';
import { Lab900DataListItemInfoDirective } from '../../directives/data-list-item-info.directive';

@Component({
  selector: 'lab900-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class Lab900DataListComponent {
  @Input()
  public data: any[];

  @Input()
  public emptyListLabel = 'No data available';

  @Input()
  public actions: DataListItemAction[] = [];

  @Input()
  public userLabelFn: (user: any) => string;

  @Input()
  public userImageFn: (user: any) => string;

  @Input()
  public sharedUsersFn: (data: any) => any[];

  @ContentChild(Lab900DataListEmptyDirective, { read: TemplateRef })
  public emptyListTemplate?: Lab900DataListEmptyDirective;

  @ContentChild(Lab900DataListItemInfoDirective, { read: TemplateRef })
  public dataListItemInfoTemplate?: Lab900DataListItemInfoDirective;
}
