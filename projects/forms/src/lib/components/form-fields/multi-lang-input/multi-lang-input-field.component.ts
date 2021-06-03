import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { MultiLangInputFieldOptions, ValueLabel } from '../../../models/FormField';
import { LAB900_FORM_MODULE_SETTINGS, Lab900FormModuleSettings } from '../../../models/Lab900FormModuleSettings';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lab900-multi-lang-input-field',
  templateUrl: './multi-lang-input-field.component.html',
  styleUrls: ['./multi-lang-input-field.component.scss'],
})
export class MultiLangInputFieldComponent extends FormComponent<MultiLangInputFieldOptions> implements OnInit, AfterViewInit {
  @HostBinding('class')
  public classList = `lab900-form-field`;

  public globalTranslation = '';

  public translate = false;

  public activeLanguage!: ValueLabel;

  constructor(@Inject(LAB900_FORM_MODULE_SETTINGS) public setting: Lab900FormModuleSettings, translateService: TranslateService) {
    super(translateService);
  }

  public get inputType(): 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' {
    return this.options?.type ?? 'text';
  }

  public ngOnInit(): void {
    this.toggleTranslate(!!Object.values(this.fieldControl.value ?? {}).some((v) => !!v));
  }

  public ngAfterViewInit(): void {
    super.ngAfterViewInit();
    setTimeout(() => {
      if (this.options?.languages?.length) {
        if (this.options.defaultLanguage) {
          this.activeLanguage = this.options.languages.find((l) => l.value === this.options.defaultLanguage) ?? this.options?.languages[0];
        } else {
          this.activeLanguage = this.options?.languages[0];
        }
      }
    });
  }

  public updateGlobalTranslation(value: string): void {
    this.globalTranslation = value;
    if (!this.translate) {
      this.updateAllToGlobalTranslation();
    }
  }

  public toggleTranslate(value: boolean): void {
    this.translate = value;
    if (!this.translate) {
      this.globalTranslation = Object.values((this.fieldControl as FormGroup)?.value ?? {}).find((v) => !!v) as string;
      this.updateAllToGlobalTranslation();
    }
  }

  private updateAllToGlobalTranslation(): void {
    const translated = this.options.languages.reduce((acc, lang) => {
      return { ...acc, [lang.value]: this.globalTranslation };
    }, {} as Record<string, string>);
    this.fieldControl.patchValue(translated);
    this.fieldControl.updateValueAndValidity();
  }
}
