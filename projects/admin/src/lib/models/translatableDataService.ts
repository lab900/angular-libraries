import { DataService } from './dataService';

export interface TranslatableDataService extends DataService {
  /* Single methods */
  getByIdAndLanguage(id: any, language: string);
}
