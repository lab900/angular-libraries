import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lib-wysiwyg-field',
  templateUrl: './wysiwyg-field.component.html',
  styleUrls: ['./wysiwyg-field.component.css'],
})
export class WysiwygFieldComponent extends FormComponent implements OnInit {
  ngOnInit(): void {}
}
