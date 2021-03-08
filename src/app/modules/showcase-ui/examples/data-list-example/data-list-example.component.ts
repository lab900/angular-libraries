import { Component, OnInit } from '@angular/core';
import { DataListSharing, Paging, ActionButton } from '@lab900/ui';
import { PageEvent } from '@angular/material/paginator';

const dummyData: any[] = [
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

@Component({
  selector: 'lab900-data-list-example',
  template: `
    <lab900-data-list [data]="data" [actions]="actions" [dataListSharing]="sharing" [paging]="paging" (pageChange)="changePage($event)">
      <div *lab900DataListEmpty>if this list is empty this appears</div>
      <div *lab900DataListItemInfo="let data">
        {{ data.title }}
      </div>
    </lab900-data-list>
  `,
})
export class DataListExampleComponent implements OnInit {
  public data: any[];

  public paging: Paging = {
    pageIndex: 0,
    pageSize: 5,
    totalItems: dummyData.length,
  };

  public actions: ActionButton[] = [
    {
      label: 'chat_bubble_outline',
      type: 'icon',
      action: (data: any) => console.log(data),
    },
    {
      label: 'more_horiz',
      type: 'icon',
      subActions: [
        {
          prefixIcon: 'edit',
          label: 'edit',
        },
      ],
    },
  ];

  public sharing: DataListSharing = {
    userLabelFn: (user: any) => user.username,
    userImageFn: (user: any) => user.profileImage || '',
    sharedUsersFn: (data: any) => (data && data.sharedWith) || [],
  };

  public ngOnInit(): void {
    this.data = this.paginate(dummyData, 1);
  }

  public changePage(pageEvent: PageEvent): void {
    this.data = this.paginate(dummyData, pageEvent.pageIndex + 1);
  }

  public paginate(data: any[], page: number): any[] {
    return data.slice((page - 1) * this.paging.pageSize, page * this.paging.pageSize);
  }
}
