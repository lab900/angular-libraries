import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ShowcaseConfigModel } from '../../models/showcase-config.model';
import { NavItemGroup } from '../../../../../../projects/ui/src/lib/nav-list/models/nav-item.model';

@Component({
  selector: 'lab900-showcase-home',
  templateUrl: './showcase-home.component.html',
  styleUrls: ['./showcase-home.component.scss'],
})
export class ShowcaseHomeComponent {
  public data$: Observable<{ config: ShowcaseConfigModel; nav: NavItemGroup[] }> = this.activatedRoute.data as any;

  constructor(private activatedRoute: ActivatedRoute) {}
}
