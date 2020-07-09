import { Schema } from '../../../../projects/admin/src/lib/models/schema';
import { SchemaField } from '../../../../projects/admin/src/lib/models/schemaField';
import { EditType } from '../../../../projects/forms/src/lib/models/editType';

export const NEWS_SCHEMA: Schema = {
  name: 'News',
  editable: true,
  creatable: true,
  deletable: true,
  fields: [
    {
      title: 'label.id',
      attribute: 'id',
      editType: EditType.Input,
      overviewOptions: {
        hide: true,
      },
    },
    {
      title: 'Published',
      attribute: 'published',
      editType: EditType.Checkbox,
    },
    {
      title: 'label.title',
      attribute: 'title',
      editType: EditType.Input,
      overviewOptions: {
        sticky: true,
        onClick: (column: SchemaField, value: any, row: any) => {
          alert('clicked on: ' + column.attribute);
        },
      },
    },
    {
      title: 'label.subtitle',
      attribute: 'subTitle',
      editType: EditType.Input,
    },
    {
      title: 'label.author',
      attribute: 'author',
      editType: EditType.Input,
    },
    {
      title: 'label.posted-on',
      editType: EditType.Date,
      attribute: 'postedOn',
    },
    {
      title: 'label.posted-on',
      editType: EditType.Date,
      attribute: 'postedOnShort',
      overviewOptions: {
        displayOptions: {
          pipeFormat: 'shortTime',
          maxColumnWidth: '90px',
        },
      },
    },
    {
      title: 'label.posted-by',
      attribute: 'postedBy',
      editType: EditType.Input,
      overviewOptions: {
        displayOptions: {
          customFormatter: (data) => `custom <strong>formatted</strong> ${data}`,
        },
      },
    },
    {
      title: 'label.content',
      attribute: 'content',
      editType: EditType.Wysiwyg,
      overviewOptions: {
        hide: true,
      },
      editOptions: {
        editorConfig: {
          uploadUrl: 'https://europe-west1-tournamentcenter-tools-dev.cloudfunctions.net/uploadImage',
          uploadWithCredentials: true,
        },
      },
    },
    {
      title: 'label.background',
      attribute: 'backgroundImageUrl',
      editType: EditType.Image,
    },
  ],
};

export const NEWS_ITEMS = [
  {
    id: '1',
    published: true,
    title: 'Combating the Lockdown: an insider’s experience on entering new marketing channels!',
    subTitle: 'Get your community to represent your store and take home the trophy.',
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
    published: false,
    title: 'Interview with Michael Loizou – Owner of The Brotherhood Games Ltd',
    subTitle: '(Interview conducted at Sneak Attacks Regional Event on Saturday, 6th April, 2019)',
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
    published: true,
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
