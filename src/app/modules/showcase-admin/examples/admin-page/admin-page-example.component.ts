import { Component, OnInit } from '@angular/core';
import { NEWS_ITEMS, NEWS_SCHEMA } from '../configs/news-schema.config';
import { DataService } from '../../../../../../projects/admin/src/lib/models/dataService';
import { Item, Page } from '../../../../../../projects/admin/src/lib/models/page';

@Component({
  selector: 'lab900-admin-page-showcase',
  templateUrl: './admin-page-example.component.html',
})
export class AdminPageExampleComponent {
  public newsSchema = NEWS_SCHEMA;

  public dataService = new (class implements DataService {
    private previousPage = 0;
    create(item: object): Promise<string> {
      throw new Error('Method not implemented.');
    }
    delete(item: Item): Promise<void> {
      return Promise.resolve(undefined);
    }
    getPage(page: number, items: number): Promise<Page<Item>> {
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

    defaultPageSize(): number {
      return 3;
    }

    update(object: Item): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
    }
  })();
}
