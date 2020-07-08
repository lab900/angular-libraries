import { Component } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lab900-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.scss'],
})
export class FileFieldComponent extends FormComponent {
  constructor(translateService: TranslateService) {
    super(translateService);
  }
}
