import { Route } from '@angular/router';
import { ShowcasePageComponent } from '../components/showcase-page/showcase-page.component';
import { Type } from '@angular/core';
import { ShowcaseExample } from './showcase-example.model';

export interface ShowcaseRouteData {
  title: string;
  examples: ShowcaseExample[];
}
export class ShowcaseRoute implements Route {
  public component: Type<any> = ShowcasePageComponent;
  public data: ShowcaseRouteData;

  public constructor(public path: string, title: string, examples: ShowcaseExample[]) {
    this.data = { title, examples };
  }
}
