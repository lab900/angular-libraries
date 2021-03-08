import { Component } from '@angular/core';
import { NEWS_ITEMS, NEWS_SCHEMA } from '../configs/news-schema.config';
import { DataService, Item, Page } from '@lab900/admin';

@Component({
  selector: 'lab900-admin-page-example',
  templateUrl: './admin-page-example.component.html',
})
export class AdminPageExampleComponent {
  public newsSchema = NEWS_SCHEMA;
  public dialogOptions = { disableClose: false };

  public dataService = new (class implements DataService {
    private previousPage = 0;
    public create(item: object): Promise<string> {
      throw new Error('Method not implemented.');
    }
    public delete(item: Item): Promise<void> {
      return Promise.resolve(undefined);
    }
    public getPage(page: number, items: number): Promise<Page<Item>> {
      return new Promise<Page<Item>>((resolve) => {
        const hasmore = !!NEWS_ITEMS[page * items] || page < this.previousPage;
        this.previousPage = page;
        setTimeout(
          () =>
            resolve({
              pageNumber: page,
              items: NEWS_ITEMS.slice((page - 1) * items, page * items),
              hasMore: hasmore,
            }),
          300,
        );
      });
    }

    public defaultPageSize(): number {
      return 3;
    }

    public update(object: Item): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
    }
  })();
}
