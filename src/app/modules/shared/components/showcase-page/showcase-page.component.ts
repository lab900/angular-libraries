import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ShowcaseRouteData } from '../../models/showcase-route.model';

@Component({
  selector: 'lab900-showcase-page',
  templateUrl: './showcase-page.component.html',
  styleUrls: ['./showcase-page.component.scss'],
})
export class ShowcasePageComponent {
  public examples: any[];
  public data$: Observable<ShowcaseRouteData> = this.activatedRoute.data as any;

  constructor(private activatedRoute: ActivatedRoute) {}
}
