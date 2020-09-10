import { Component, OnInit } from '@angular/core';
import { NEWS_ITEMS, NEWS_SCHEMA } from '../configs/news-schema.config';
import { DataService } from '../../../../../../projects/admin/src/lib/models/dataService';
import { Item, Page } from '../../../../../../projects/admin/src/lib/models/page';
import { of } from 'rxjs';

@Component({
  selector: 'lab900-admin-page-showcase',
  templateUrl: './admin-page-example.component.html',
})
export class AdminPageExampleComponent implements OnInit {
  public newsSchema = NEWS_SCHEMA;

  public dataService = new (class implements DataService {
    private previousPage = 0;
    create(item: object): Promise<string> {
      console.log(item);
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

    async getByIdAndLanguage(id: any, language: string): Promise<Item> {
      return {
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
      };
    }

    update(object: Item): Promise<void> {
      console.log('data service is updating the item');
      console.log(object);
      return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 1000);
      });
    }
  })();

  constructor() {}

  ngOnInit(): void {}
}
