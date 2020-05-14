import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../projects/angular-admin/src/lib/models/crudService';
import { EditType } from '../../../../projects/angular-admin/src/lib/models/editType';
import { Schema } from '../../../../projects/angular-admin/src/lib/models/schema';
import { Item, Page } from '../../../../projects/angular-admin/src/lib/models/page';

@Component({
  selector: 'app-angular-admin-showcase',
  templateUrl: './angular-admin-showcase.component.html',
  styleUrls: ['./angular-admin-showcase.component.scss']
})
export class AngularAdminShowcaseComponent implements OnInit {

  public newsSchema: Schema = {
    name: 'News',
    fields: [
      {
        title: 'Title',
        attribute: 'title',
        editType: EditType.Input,
        showInOverview: true
      },
      {
        title: 'Subtitle',
        attribute: 'subTitle',
        editType: EditType.Input,
        showInOverview: false
      },
      {
        title: 'Author',
        attribute: 'author',
        editType: EditType.Input,
        showInOverview: true
      },
      {
        title: 'Posted On',
        editType: EditType.Date,
        attribute: 'postedOn',
        showInOverview: true
      },
      {
        title: 'Posted On',
        editType: EditType.Date,
        attribute: 'postedOnShort',
        showInOverview: true,
        displayOptions: {
          pipeFormat: 'shortTime'
        }
      },
      {
        title: 'Posted By',
        attribute: 'postedBy',
        editType: EditType.Input,
        showInOverview: true,
        displayOptions: {
          customFormatter: data => `custom <strong>formatted</strong> ${data}`
        }
      },
      {
        title: 'Content',
        attribute: 'content',
        editType: EditType.Wysiwyg,
        showInOverview: false
      },
      {
        title: 'Background',
        attribute: 'backgroundImageUrl',
        editType: EditType.Image,
        showInOverview: true
      },
    ]
  }

  public dataService = new class implements DataService {
  delete(item: Item): Promise<void> {
    console.log(`deleting item ${item.id}`)
    return Promise.resolve(undefined);
  }

  getPage(page: number, items: number): Promise<Page<Item>> {
    return Promise.resolve({
      items: [
        ({
          id: '1',
          title: 'hello world',
          subTitle: 'hello world sub',
          author: 'Johan',
          postedBy: 'johan',
          postedOn: new Date(),
          postedOnShort: new Date(),
          backgroundImageUrl: 'https://firebasestorage.googleapis.com/v0/b/lab900-website-production.appspot.com/o/public%2Fproject-images%2Fradar%2Fradar-mockup.svg?alt=media&token=0b42563b-730f-4cf2-8828-17d957e30965'
        }) as Item
      ]
    });
  }

  update(object: Item): Promise<void> {
    return Promise.resolve(undefined);
  }

}();

  constructor() { }

  ngOnInit(): void {
  }

}
