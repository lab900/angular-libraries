import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormComponent } from '../../models/IFormComponent';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { Lab900FormBuilderService } from '../../services/form-builder.service';

@Component({
  selector: 'lab900-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss'],
  animations: [matFormFieldAnimations.transitionMessages],
})
export class FormRowComponent extends FormComponent {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public constructor(private fb: Lab900FormBuilderService, translateService: TranslateService) {
    super(translateService, fb);
  }

  get visible(): boolean {
    if (this.options && this.options.visibleFn) {
      return this.options.visibleFn(this);
    }
    return true;
  }
}
