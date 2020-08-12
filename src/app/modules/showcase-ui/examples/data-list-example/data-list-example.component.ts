import { Component } from '@angular/core';
import { DataListItemAction, DataListSharing } from '../../../../../../projects/ui/src/lib/sharing/models/data-list.model';

@Component({
  selector: 'lab900-data-list-example',
  template: `
  <lab900-data-list [data]="dummyData" [actions]="actions" [dataListSharing]="sharing">
    <div *lab900DataListEmpty>
      if this list is empty this appears
    </div>
    <div *lab900DataListItemInfo="let data">
      {{data.title}}
    </div>
  </lab900-data-list>
  `,
})
export class DataListExampleComponent {
  public dummyData = [
    {
      title: 'Dummy',
      sharedWith: [
        {username: 'testUser', profileImage: 'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fpng%2FLAB900_18.png?alt=media'},
        {username: 'testUser2'},
        {username: 'testUser'},
        {username: 'testUser'},
      ]
    },
    {
      title: 'Dummy2',
    },
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
          label: (data: any) => data.title,
        },
      ],
    },
  ];

  public sharing: DataListSharing = {
    userLabelFn: (user: any) => user.username,
    userImageFn: (user: any) => user.profileImage || '',
    sharedUsersFn: (data: any) => (data && data.sharedWith) || [],
  };
}
