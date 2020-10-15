import { Route } from '@angular/router';
import { ShowcasePageComponent } from '../components/showcase-page/showcase-page.component';
import { Type } from '@angular/core';
import { ShowcaseExample } from './showcase-example.model';

export interface ShowcaseRouteData {
  title: string;
  path: string;
  examples?: ShowcaseExample[];
  docFile?: string;
}
export class ShowcaseRoute implements Route {
  public component: Type<any> = ShowcasePageComponent;
  public data: ShowcaseRouteData;

  public constructor(public path: string, title: string, examples?: ShowcaseExample[], docFile?: string) {
    this.data = { title, path, examples, docFile };
  }
}
