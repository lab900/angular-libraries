export interface Page<T> {
  items: T[];
  pageNumber: number;
  hasMore?: boolean;
}

export interface Item {
  id: number | string;
}
