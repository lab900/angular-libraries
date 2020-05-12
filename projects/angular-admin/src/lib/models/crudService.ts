import { Page } from './page';

export interface CrudService {

  /* Single methods */
  update(id: any, object: any): Promise<void>;
  delete(id: any): Promise<void>;
  get(id: any): Promise<any>;

  /* Paginated methods */
  getPage(page: number, items: number ): Promise<Page<any>>;

}
