import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'lab900-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit, OnDestroy {
  @Input()
  maxFiles = 1;

  @Input()
  multiple = false;

  @Input()
  accept: string[] = [];

  errors: string[] = [];
  files: string[] = [];

  constructor(private host: ElementRef) {}

  ngOnInit(): void {
    this.multiple = this.maxFiles > 1;
  }

  get fileSpecifiers() {
    return this.accept.join(',');
  }

  captureEvent() {
    const inputElement: HTMLElement = this.host.nativeElement.querySelector('input');
    inputElement.click();
  }

  @HostListener('change', ['$event.target.files']) emitFiles(event: FileList) {
    if (event) {
      this.files = [];
      const numberOfFiles = event.length;
      const maxFiles = numberOfFiles > this.maxFiles ? this.maxFiles : numberOfFiles;
      for (let i = 0; i < maxFiles; i++) {
        this.files.push(URL.createObjectURL(event.item(i)));
      }
    }
  }

  remove(index: number) {
    if (index >= 0 && index < this.files.length) {
      const oldFiles = this.files.splice(index, 1);
      oldFiles.forEach(URL.revokeObjectURL);
    }
  }

  ngOnDestroy(): void {
    this.files.forEach(URL.revokeObjectURL);
  }
}
