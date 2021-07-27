import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShowcaseConfigModel } from '../../models/showcase-config.model';
import { NavItemGroup } from '@lab900/ui';

@Component({
  selector: 'lab900-showcase-home',
  templateUrl: './showcase-home.component.html',
  styleUrls: ['./showcase-home.component.scss'],
})
export class ShowcaseHomeComponent {
  public data$: Observable<{
    config: ShowcaseConfigModel;
    nav: NavItemGroup[];
  }> = this.activatedRoute.data as any;

  public constructor(private activatedRoute: ActivatedRoute) {}
}
