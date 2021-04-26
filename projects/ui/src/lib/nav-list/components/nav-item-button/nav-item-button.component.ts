import { Component, Input } from '@angular/core';
import { NavItem } from '../../models/nav-item.model';

@Component({
  selector: 'lab900-nav-item-button',
  styleUrls: ['./nav-item-button.component.scss'],
  template: `<button
    fxFlex="1 1 auto"
    role="menuitem"
    class="nav-item-btn"
    mat-list-item
    [disabled]="disabled"
    [ngStyle]="{ 'padding-left': depth * 12 + 'px' }"
    [ngClass]="{ active: active, expanded: expanded, expandable: item?.children?.length }"
  >
    <lab900-icon
      class="nav-item-btn__icon-left"
      [icon]="item.icon"
      *ngIf="item.icon && (item.icon?.position === 'left' || !item.icon?.position)"
    ></lab900-icon>
    <span fxFlex="1 1 auto">{{ item.label | translate }}</span>
    <lab900-icon
      class="nav-item-btn__icon-right"
      [icon]="item.icon"
      *ngIf="!showLevelArrow && item?.icon?.position === 'right'"
    ></lab900-icon>
    <lab900-icon class="nav-item-btn__icon-right" [icon]="{ name: levelArrow }" *ngIf="showLevelArrow"></lab900-icon>
  </button>`,
})
export class NavItemButtonComponent {
  @Input()
  public readonly item: NavItem;

  @Input()
  public readonly expanded: boolean;

  @Input()
  public readonly active: boolean;

  @Input()
  public readonly disabled: boolean;

  @Input()
  public readonly depth: number;

  @Input()
  public readonly showLevelArrow: boolean = false;

  get levelArrow(): string {
    if (this.item?.childrenInOverlay) {
      return 'navigate_next';
    }
    return this.expanded ? 'expand_less' : 'expand_more';
  }
}
