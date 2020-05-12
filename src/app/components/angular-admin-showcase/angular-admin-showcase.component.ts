import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../projects/angular-admin/src/lib/models/crudService';
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
        showInOverview: true
      },
      {
        title: 'Content',
        attribute: 'content',
        editType: EditType.Wysiwyg,
        showInOverview: false
      },
    ],
    crudService: new class implements CrudService {
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
              postedOnShort: new Date()
            }) as Item
          ]
        });
      }

      update(object: Item): Promise<void> {
        return Promise.resolve(undefined);
      }

    }()
  }

  /*
        delete(item: Item<string>): Promise<void> {
        console.log(`deleting item ${id}`)
        return Promise.resolve(undefined);
      }

      get(id: string): Promise<unknown> {
        return Promise.resolve(undefined);
      }

      getPage(page: number, items: number): Promise<Page<unknown>> {
        return Promise.resolve({
          items: [
            {
              title: 'hello world',
              subTitle: 'hello world sub',
              author: 'Johan',
              postedBy: 'johan'
            }
            ]
        });
      }

      update(id: unknown, object: unknown): Promise<void> {
        return Promise.resolve(undefined);
      }
   */

  constructor() { }

  ngOnInit(): void {
  }

}
