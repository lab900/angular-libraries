import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../projects/admin/src/lib/models/dataService';
import { Item, Page } from '../../../../projects/admin/src/lib/models/page';
import { Schema } from '../../../../projects/admin/src/lib/models/schema';
import { EditType } from 'forms';

const NEWS_ITEMS = [
  {
    id: '1',
    title: 'hello world',
    subTitle: 'hello world sub',
    author: 'Johan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedBy: 'johan',
    postedOn: new Date(),
    postedOnShort: new Date(),
    backgroundImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fradar%2Fradar-mockup.svg?alt=media&token=0b42563b-730f-4cf2-8828-17d957e30965',
  },
  {
    id: '2',
    title: 'hello world',
    subTitle: 'hello world sub',
    author: 'Johan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedBy: 'johan',
    postedOn: new Date(),
    postedOnShort: new Date(),
    backgroundImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fradar%2Fradar-mockup.svg?alt=media&token=0b42563b-730f-4cf2-8828-17d957e30965',
  },
  {
    id: '3',
    title: 'hello world',
    subTitle: 'hello world sub',
    author: 'Johan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedBy: 'johan',
    postedOn: new Date(),
    postedOnShort: new Date(),
    backgroundImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fradar%2Fradar-mockup.svg?alt=media&token=0b42563b-730f-4cf2-8828-17d957e30965',
  },
  {
    id: '4',
    title: 'hello world',
    subTitle: 'hello world sub',
    author: 'Johan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedBy: 'johan',
    postedOn: new Date(),
    postedOnShort: new Date(),
    backgroundImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fradar%2Fradar-mockup.svg?alt=media&token=0b42563b-730f-4cf2-8828-17d957e30965',
  },
  {
    id: '5',
    title: 'hello world',
    subTitle: 'hello world sub',
    author: 'Johan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedBy: 'johan',
    postedOn: new Date(),
    postedOnShort: new Date(),
    backgroundImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fradar%2Fradar-mockup.svg?alt=media&token=0b42563b-730f-4cf2-8828-17d957e30965',
  },
  {
    id: '6',
    title: 'hello world',
    subTitle: 'hello world sub',
    author: 'Johan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedBy: 'johan',
    postedOn: new Date(),
    postedOnShort: new Date(),
    backgroundImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fradar%2Fradar-mockup.svg?alt=media&token=0b42563b-730f-4cf2-8828-17d957e30965',
  },
  {
    id: '7',
    title: 'hello world',
    subTitle: 'hello world sub',
    author: 'Johan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedBy: 'johan',
    postedOn: new Date(),
    postedOnShort: new Date(),
    backgroundImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fradar%2Fradar-mockup.svg?alt=media&token=0b42563b-730f-4cf2-8828-17d957e30965',
  },
  {
    id: '8',
    title: 'hello world',
    subTitle: 'hello world sub',
    author: 'Johan',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    postedBy: 'johan',
    postedOn: new Date(),
    postedOnShort: new Date(),
    backgroundImageUrl:
      'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fradar%2Fradar-mockup.svg?alt=media&token=0b42563b-730f-4cf2-8828-17d957e30965',
  },
];

@Component({
  selector: 'lab900-admin-showcase',
  templateUrl: './admin-showcase.component.html',
  styleUrls: ['./admin-showcase.component.scss'],
})
export class AdminShowcaseComponent implements OnInit {
  public newsSchema: Schema = {
    name: 'News',
    fields: [
      {
        title: 'Id',
        attribute: 'id',
        editType: EditType.Input,
        overviewOptions: {
          show: false,
        },
      },
      {
        title: 'Title',
        attribute: 'title',
        editType: EditType.Input,
        overviewOptions: {
          show: true,
          sticky: true,
        },
      },
      {
        title: 'Subtitle',
        attribute: 'subTitle',
        editType: EditType.Input,
      },
      {
        title: 'Author',
        attribute: 'author',
        editType: EditType.Input,
        overviewOptions: {
          show: true,
        },
      },
      {
        title: 'Posted On',
        editType: EditType.Date,
        attribute: 'postedOn',
        overviewOptions: {
          show: true,
        },
      },
      {
        title: 'Posted On',
        editType: EditType.Date,
        attribute: 'postedOnShort',
        overviewOptions: {
          show: true,
          displayOptions: {
            pipeFormat: 'shortTime',
            maxColumnWidth: '90px',
          },
        },
      },
      {
        title: 'Posted By',
        attribute: 'postedBy',
        editType: EditType.Input,
        overviewOptions: {
          show: true,
          displayOptions: {
            customFormatter: (data) => `custom <strong>formatted</strong> ${data}`,
          },
        },
      },
      {
        title: 'Content',
        attribute: 'content',
        editType: EditType.Wysiwyg,
        overviewOptions: {
          show: true,
        },
      },
      {
        title: 'Background',
        attribute: 'backgroundImageUrl',
        editType: EditType.Image,
        overviewOptions: {
          show: true,
        },
      },
    ],
  };

  public dataService = new (class implements DataService {
    delete(item: Item): Promise<void> {
      console.log(`deleting item ${item.id}`);
      return Promise.resolve(undefined);
    }

    getPage(page: number, items: number): Promise<Page<Item>> {
      return new Promise<Page<Item>>((resolve) => {
        setTimeout(
          () =>
            resolve({
              pageNumber: page,
              items: NEWS_ITEMS.slice((page - 1) * items, page * items),
            }),
          300,
        );
      });
    }

    defaultPageSize(): number {
      return 3;
    }

    update(object: Item): Promise<void> {
      console.log('data service is updating the item');
      return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
    }
  })();

  constructor() {}

  ngOnInit(): void {}
}
