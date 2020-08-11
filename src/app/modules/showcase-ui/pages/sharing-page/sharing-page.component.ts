import { Component } from '@angular/core';

@Component({
  selector: 'lab900-sharing-page',
  templateUrl: './sharing-page.component.html',
})
export class SharingPageComponent {
  public users = [
    {
      username: 'testUser',
      profileImage:
        'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fpng%2FLAB900_18.png?alt=media',
    },
    { username: 'testUser2' },
    { username: 'testUser' },
    { username: 'testUser' },
  ];

  public userLabelFn = (user: any) => user.username;
  public userImageFn = (user: any) => user.profileImage || '';
}
