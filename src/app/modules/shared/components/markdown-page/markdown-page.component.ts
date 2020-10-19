import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'lab900-markdown-page',
  templateUrl: './markdown-page.component.html',
  styleUrls: ['./markdown-page.component.scss'],
})
export class MarkdownPageComponent {
  @Input()
  public filePath: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .pipe(
        filter((data: { filePath: string }) => !!data?.filePath),
        take(1),
      )
      .subscribe((data) => {
        this.filePath = data.filePath;
      });
  }
}
