export interface Page<T> {
  items: T[];
  pageNumber: number;
}

export interface Item {
  id: number | string;
}
