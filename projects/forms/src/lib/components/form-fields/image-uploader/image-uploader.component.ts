import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';

@Component({
  selector: 'lab900-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent extends FormComponent implements OnInit {
  srcResult: any;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
