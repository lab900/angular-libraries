import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { WysiwygFieldOptions } from '../../../models/FormField';

@Component({
  selector: 'lab900-wysiwyg-field',
  template: `
    <div [formGroup]="group">
      <angular-editor [formControlName]="schema.attribute" [config]="editorConfig"></angular-editor>
    </div>
  `,
})
export class WysiwygFieldComponent extends FormComponent<WysiwygFieldOptions> implements OnInit {
  public editorConfig: AngularEditorConfig;

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
