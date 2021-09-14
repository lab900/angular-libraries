import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ValueLabel } from '../../models/FormField';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'lab900-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent {
  @Input()
  public translate = false;

  @Input()
  public value?: Record<string, string>;

  @Output()
  public translateChange = new EventEmitter<boolean>();

  @Input()
  public buttonColor?: ThemePalette;

  @Input()
  public languages: ValueLabel[] = [];

  @Input()
  public activeLanguage: ValueLabel;

  @Output()
  public readonly activeLanguageChange = new EventEmitter<ValueLabel>();

  @Input()
  public translateLabel?: string;

  @Input()
  public stopTranslateLabel?: string;

  public toggleTranslate(): void {
    this.translateChange.emit(!this.translate);
  }
}
