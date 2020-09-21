import { Item, Page } from './page';

export interface DataService {
  /* Single methods */
  update(item: Item): Promise<void>;
  create(item: object): Promise<string>;
  delete(item: Item): Promise<void>;

  /* Paginated methods */
  getPage(page: number, items: number): Promise<Page<Item>>;
  defaultPageSize(): number;
}
