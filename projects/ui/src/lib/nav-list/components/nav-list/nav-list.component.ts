import { Component, Input } from '@angular/core';
import { NavItemGroup } from '../../models/nav-item.model';

@Component({
  selector: 'lab900-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  @Input()
  public readonly navItemGroups: NavItemGroup[];

  @Input()
  public readonly indentLevels = true;

  @Input()
  public readonly allowOverlayMenuUntil: string | string[] = 'xs';
}
