import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from '../../models/Image';
import { AuthImagePipe } from '../../auth-image.pipe';

@Component({
  selector: 'lab900-image-preview-modal',
  templateUrl: './image-preview-modal.component.html',
  styleUrls: ['./image-preview-modal.component.scss'],
})
export class ImagePreviewModalComponent implements OnInit {
  private image: Image;
  public imageSrc: string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: { image: Image }, private authImagePipe: AuthImagePipe) {
    this.image = data.image;
    this.authImagePipe
      .transform(this.image.imageSrc, this.image.authHeaders)
      .then((url: string) => {
        this.imageSrc = url;
      })
      .catch((e) => console.error(e));
  }

  public ngOnInit(): void {}
}
