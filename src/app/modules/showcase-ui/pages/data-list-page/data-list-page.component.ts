import { Component } from '@angular/core';
import { DataListItemAction } from 'projects/ui/src/lib/data-list/models/data-list.model';

@Component({
  selector: 'lab900-data-list-page',
  templateUrl: './data-list-page.component.html',
})
export class DataListPageComponent {
  public dummyData = [
    { title: 'Dummy' },
    { title: 'Dummy2' },
  ];

  public actions: DataListItemAction[] = [
    {
      icon: 'chat_bubble_outline',
      action: (data: any) => console.log(data),
    },
    {
      icon: 'more_horiz',
      subActions: [
        {
          icon: 'edit',
          label: 'test',
        },
      ],
    },
  ];
}
