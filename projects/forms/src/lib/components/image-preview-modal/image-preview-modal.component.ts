import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from '../../models/Image';

interface DialogData {
  image: Image;
}

@Component({
  selector: 'lab900-image-preview-modal',
  templateUrl: './image-preview-modal.component.html',
  styleUrls: ['./image-preview-modal.component.scss'],
})
export class ImagePreviewModalComponent {
  public image: Image;
  public error = true;

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogData) {
    this.image = data.image;
  }
}
