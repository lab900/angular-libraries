import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Image } from '../../models/Image';
import { AuthImagePipe } from '../../auth-image.pipe';

@Component({
  selector: 'lab900-image-preview-modal',
  templateUrl: './image-preview-modal.component.html',
  styleUrls: ['./image-preview-modal.component.scss'],
})
export class ImagePreviewModalComponent {
  private image: Image;
  public imageSrc: string;
  public loading = false;
  public error = true;

  constructor(@Inject(MAT_DIALOG_DATA) private data: { image: Image }, private authImagePipe: AuthImagePipe) {
    this.image = data.image;
    this.loading = true;
    this.authImagePipe
      .transform(this.image.imageSrc, this.image.authHeaders)
      .then((url: string) => {
        this.imageSrc = url;
      })
      .catch((e) => {
        console.error(e);
        this.error = true;
        this.loading = false;
      })
      .finally(() => (this.loading = false));
  }
}
