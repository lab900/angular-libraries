import { Component } from '@angular/core';
import { NEWS_ITEMS, NEWS_SCHEMA } from '../configs/news-schema.config';
import { TranslatableDataService } from '../../../../../../projects/admin/src/lib/models/translatableDataService';
import { Item, Page } from '@lab900/admin';

@Component({
  selector: 'lab900-translatable-admin-page-example',
  templateUrl: './translatable-admin-page-example.component.html',
})
export class TranslatableAdminPageExampleComponent {
  public newsSchema = NEWS_SCHEMA;
  public dialogOptions = { disableClose: false };

  public dataService = new (class implements TranslatableDataService {
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

    async getByIdAndLanguage(id: any, language: string): Promise<object> {
      return new Promise<object>((resolve) => {
        setTimeout(() => resolve(NEWS_ITEMS[0]), 1000);
      });
    }

    update(object: Item): Promise<void> {
      return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
    }
  })();
}
