import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../projects/angular-admin/src/lib/models/crudService';
import { EditType } from '../../../../projects/angular-admin/src/lib/models/editType';
import { Schema } from '../../../../projects/angular-admin/src/lib/models/schema';

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
      delete(id: any): Promise<void> {
        // Can use external services to do its work or implement them again
        return Promise.resolve(undefined);
      }

      get(id: any): Promise<any> {
        return Promise.resolve(undefined);
      }

      getList(page: number, items: number): Promise<any> {
        // This one probably needs more: ordering, filters. Maybe in v1 we only do one type of filtering?
        return Promise.resolve([
          {
            title: 'hello world',
            subTitle: 'hello world sub',
            author: 'Johan',
            postedBy: 'johan'
          }
        ]);
      }

      update(id: any, object: any): Promise<void> {
        return Promise.resolve(undefined);
      }
    }()
  };


  constructor() { }

  ngOnInit(): void {
  }

}
