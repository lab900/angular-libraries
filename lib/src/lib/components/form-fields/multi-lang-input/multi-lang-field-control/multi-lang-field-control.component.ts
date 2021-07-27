import {
  Component,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessorDirective } from '../../../../models/forms/BaseControlValueAccessor';
import { ThemePalette } from '@angular/material/core';
import {
  LAB900_FORM_MODULE_SETTINGS,
  Lab900FormModuleSettings,
} from '../../../../models/Lab900FormModuleSettings';
import { ValueLabel } from '../../../../models/form-field-base';

@Component({
  selector: 'lab900-multi-lang-field-control',
  templateUrl: './multi-lang-field-control.component.html',
  styleUrls: ['./multi-lang-field-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultiLangFieldControlComponent,
      multi: true,
    },
  ],
})
export class MultiLangFieldControlComponent
  extends BaseControlValueAccessorDirective<Record<string, string>>
  implements OnChanges
{
  @Input()
  public defaultLanguage?: string;

  @Input()
  public required?: boolean;

  @Input()
  public readonly?: boolean;

  @Input()
  public buttonColor?: ThemePalette;

  @Input()
  public availableLanguages?: ValueLabel[];

  @Input()
  public formControlName: string;

  @Input()
  public label: string;

  @Input()
  public translateLabel?: string;

  @Input()
  public stopTranslateLabel?: string;

  @Input()
  public useTextAreaField = false;

  public activeLanguage?: ValueLabel;

  public globalTranslation: string;

  public translate = false;

  public constructor(
    @Inject(LAB900_FORM_MODULE_SETTINGS)
    public setting: Lab900FormModuleSettings
  ) {
    super();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes?.availableLanguages && this.availableLanguages?.length) {
      this.resetDefaultLanguage();
    }
  }

  public blur(): void {
    this.onTouched();
  }

  public writeValue(value: Record<string, string>): void {
    this.value = value ?? {};
    const valuesArray = Object.values(this.value);
    const hasValues = !!valuesArray.some((v) => !!v);
    this.toggleTranslate(
      hasValues && !valuesArray.every((v) => v === valuesArray[0])
    );
  }

  public toggleTranslate(value: boolean): void {
    this.translate = value;
    if (!this.translate) {
      this.globalTranslation = Object.values(this.value).find((v) => !!v);
      this.updateAllToGlobalTranslation();
      this.resetDefaultLanguage();
    }
  }

  public updateGlobalTranslation(value: string): void {
    this.globalTranslation = value;
    if (!this.translate) {
      this.updateAllToGlobalTranslation();
    }
    this.onTouched();
  }

  public updateSingleLanguage(value: string, lang: string): void {
    this.value = { ...this.value, [lang]: value };
    this.onChange(this.value);
    this.onTouched();
  }

  public resetDefaultLanguage(): void {
    this.activeLanguage =
      this.availableLanguages.find((l) => l.value === this.defaultLanguage) ??
      this.availableLanguages[0];
  }

  private updateAllToGlobalTranslation(): void {
    this.value = this.availableLanguages.reduce((acc, lang) => {
      return { ...acc, [lang.value]: this.globalTranslation };
    }, {} as Record<string, string>);
    this.onChange(this.value);
  }
}
