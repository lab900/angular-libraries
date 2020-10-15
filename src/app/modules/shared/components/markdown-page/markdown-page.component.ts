import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lab900-markdown-page',
  templateUrl: './markdown-page.component.html',
  styleUrls: ['./markdown-page.component.scss'],
})
export class MarkdownPageComponent {
  public data$: Observable<{ filePath: string }> = this.activatedRoute.data as any;

  constructor(private activatedRoute: ActivatedRoute) {}
}
