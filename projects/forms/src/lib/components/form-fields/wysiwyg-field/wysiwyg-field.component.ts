import { Component, OnInit, HostBinding } from '@angular/core';
import { matFormFieldAnimations } from '@angular/material/form-field';
import { FormComponent } from '../../../models/IFormComponent';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { WysiwygFieldOptions } from '../../../models/FormField';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-wysiwyg-field',
  template: `
    <div [formGroup]="group" class="lab900-wysiwyg-field">
      <angular-editor [formControlName]="schema.attribute" [config]="editorConfig"></angular-editor>
    </div>
  `,
  styleUrls: ['./wysiwyg-field.component.scss'],
  animations: [matFormFieldAnimations.transitionMessages],
})
export class WysiwygFieldComponent extends FormComponent<WysiwygFieldOptions> implements OnInit {
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

      /*      editable: true,
            spellcheck: true,
            height: 'auto',
            minHeight: '0',
            maxHeight: 'auto',
            width: 'auto',
            minWidth: '0',
            translate: 'yes',
            enableToolbar: true,
            showToolbar: true,
            placeholder: 'Enter text here...',
            defaultParagraphSeparator: '',
            defaultFontName: '',
            defaultFontSize: '',
            fonts: [
              { class: 'arial', name: 'Arial' },
              { class: 'times-new-roman', name: 'Times New Roman' },
              { class: 'calibri', name: 'Calibri' },
              { class: 'comic-sans-ms', name: 'Comic Sans MS' },
            ],
            customClasses: [
              {
                name: 'quote',
                class: 'quote',
              },
              {
                name: 'redText',
                class: 'redText',
              },
              {
                name: 'titleText',
                class: 'titleText',
                tag: 'h1',
              },
            ],
            uploadUrl: 'v1/image',
            uploadWithCredentials: false,
            sanitize: true,
            toolbarPosition: 'top',
            toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],*/
      ...(this.schema?.options as WysiwygFieldOptions)?.editorConfig,
    };
  }
}
