import { Component } from '@angular/core';
import { DataListItemAction, DataListSharing } from 'projects/ui/src/lib/data-list/models/data-list.model';

@Component({
  selector: 'lab900-data-list-page',
  templateUrl: './data-list-page.component.html',
})
export class DataListPageComponent {
  public dummyData = [
    {
      title: 'Dummy',
      sharedWith: [
        {
          username: 'testUser',
          profileImage:
            'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fpng%2FLAB900_18.png?alt=media',
        },
        { username: 'testUser2' },
        { username: 'testUser' },
        { username: 'testUser' },
      ],
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
