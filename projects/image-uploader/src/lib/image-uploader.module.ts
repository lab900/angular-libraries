import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';

@NgModule({
  declarations: [ImageUploaderComponent, ImagePreviewComponent],
  imports: [CommonModule, BrowserModule],
  exports: [ImageUploaderComponent],
})
export class ImageUploaderModule {}
