import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lab900-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss'],
})
export class ImagePreviewComponent implements OnInit {
  @Input()
  domString: string;

  @Output() deleteRequest = new EventEmitter<void>();

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  delete() {
    this.deleteRequest.emit();
  }
}
