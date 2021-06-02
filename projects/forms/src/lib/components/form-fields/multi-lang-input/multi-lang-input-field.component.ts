import { AfterViewInit, Component, HostBinding, Inject } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { MultiLangInputFieldOptions, ValueLabel } from '../../../models/FormField';
import { LAB900_FORM_MODULE_SETTINGS, Lab900FormModuleSettings } from '../../../models/Lab900FormModuleSettings';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-multi-lang-input-field',
  templateUrl: './multi-lang-input-field.component.html',
  styleUrls: ['./multi-lang-input-field.component.scss'],
})
export class MultiLangInputFieldComponent extends FormComponent<MultiLangInputFieldOptions> implements AfterViewInit {
  @HostBinding('class')
  public classList = `lab900-form-field`;

  public activeLanguage!: ValueLabel;

  constructor(@Inject(LAB900_FORM_MODULE_SETTINGS) public setting: Lab900FormModuleSettings, translateService: TranslateService) {
    super(translateService);
  }

  public get inputType(): 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' {
    return this.options?.type ?? 'text';
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
}
