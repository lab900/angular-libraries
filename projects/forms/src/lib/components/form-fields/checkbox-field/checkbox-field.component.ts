import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { FormField } from '../../../models/FormField';
import { TranslateService } from '@ngx-translate/core';
import { matFormFieldAnimations } from '@angular/material/form-field';

@Component({
  selector: 'lab900-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.css'],
  animations: [matFormFieldAnimations.transitionMessages],
})
export class CheckboxFieldComponent extends FormComponent implements OnInit {
  @Input() schema: FormField;

  constructor(translateService: TranslateService) {
    super(translateService);
  }

  get indeterminate(): boolean {
    return this.group.get(this.schema.attribute).value === null;
  }

  ngOnInit(): void {}
}
