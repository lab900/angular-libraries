import { Component, OnInit, HostBinding } from '@angular/core';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { FormComponent } from '../../AbstractFormComponent';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { TranslateService } from '@ngx-translate/core';
import { WysiwgFieldModel } from './wysiwg-field.model';

@Component({
  selector: 'lab900-wysiwyg-field',
  template: `
    <div [formGroup]="group" class="lab900-wysiwyg-field">
      <angular-editor
        [formControlName]="schema.attribute"
        [config]="editorConfig"
      ></angular-editor>
    </div>
  `,
  styleUrls: ['./wysiwyg-field.component.scss'],
  animations: [matFormFieldAnimations.transitionMessages],
})
export class WysiwygFieldComponent
  extends FormComponent<WysiwgFieldModel>
  implements OnInit
{
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public editorConfig: AngularEditorConfig;

  constructor(translateService: TranslateService) {
    super(translateService);
  }

  public ngOnInit(): void {
    this.editorConfig = {
      editable: true,
      sanitize: false,
      ...(this.schema?.options?.editorConfig ?? {}),
    };
  }
}
