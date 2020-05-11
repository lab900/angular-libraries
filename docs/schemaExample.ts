/* Example schema model that can be used for generic screen generation (WIP!) */
export interface Schema {
  name: string;
  fields: SchemaField[];
  crudService: CrudService;
}

export interface SchemaField {
  attribute: string;
  title: string;
  showInOverview: boolean;  // When true, it will be shown in the table
  editType: EditType;
}

export interface CrudService {

  /* Single methods */
  update(id: any, object: any): Promise<void>;
  delete(id: any): Promise<void>;
  get(id: any): Promise<any>;

  /* Paginated methods */
  getList(page: number, items: number ): Promise<any>;

}

export enum EditType {
  Checkbox= 'Checkbox',
  TextArea= 'TextArea',
  Date = 'Date',
  Wysiwyg= 'Wysiwyg',
  Input= 'Input',
}


const newsSchema: Schema = {
  name: 'News',
  fields: [
    {
      title: 'admin.news.title',
      attribute: 'title',
      editType: EditType.Input,
      showInOverview: true
    },
    {
      title: 'admin.news.subTitle',
      attribute: 'subTitle',
      editType: EditType.Input,
      showInOverview: false
    },
    {
      title: 'admin.news.author',
      attribute: 'author',
      editType: EditType.Input,
      showInOverview: true
    },
    {
      title: 'admin.news.postedOn',
      editType: EditType.Date,
      attribute: 'postedOn',
      showInOverview: true
    },
    {
      title: 'admin.news.postedBy',
      attribute: 'postedBy',
      editType: EditType.Input,
      showInOverview: true
    },
    {
      title: 'admin.news.content',
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
      return Promise.resolve(undefined);
    }

    update(id: any, object: any): Promise<void> {
      return Promise.resolve(undefined);
    }
  }()
};
