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
  public buttonColor?: ThemePalette;

  @Input()
  public languages: ValueLabel[] = [];

  @Input()
  public activeLanguage: ValueLabel;

  @Output()
  public readonly activeLanguageChange = new EventEmitter<ValueLabel>();
}
