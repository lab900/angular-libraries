import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Lab900ButtonType } from '../../models/button.model';

@Component({
  selector: 'lab900-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class Lab900ButtonComponent {
  @Input()
  public type?: Lab900ButtonType;

  @Input()
  public color: ThemePalette = 'primary';

  @Input()
  public suffixIcon?: string;

  @Input()
  public prefixIcon?: string;

  @Input()
  public label: string;

  @Input()
  public disabled?: boolean;

  public get classList(): { suffixIcon: boolean; prefixIcon: boolean } {
    return { suffixIcon: !!this.suffixIcon, prefixIcon: !!this.prefixIcon };
  }
}
