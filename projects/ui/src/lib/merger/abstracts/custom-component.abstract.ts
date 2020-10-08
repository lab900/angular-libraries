import { Injectable, Input } from '@angular/core';

export interface CustomComponent<T> {
  data: T;
}

@Injectable()
export abstract class CustomComponentAbstract<T> implements CustomComponent<T> {
  @Input()
  public data: T;
}
