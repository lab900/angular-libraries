import { AfterViewInit, Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';

export interface ExampleFile {
  extension: string;
  data: string;
  format: string;
}

@Component({
  selector: 'lab900-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
})
export class ExampleViewerComponent implements AfterViewInit {
  @Input()
  public extensions = ['HTML', 'TS', 'SCSS'];

  @Input()
  public fileDir?: string;

  @Input()
  public exampleTitle: string;

  @Input()
  public exampleName: string;

  @ViewChild('exampleComponent')
  public exampleComponent: ElementRef;

  public showSource = false;

  public trackExampleFile(index: number, file: ExampleFile): string {
    return file.extension;
  }

  public toggleSourceView(): void {
    this.showSource = !this.showSource;
  }

  public ngAfterViewInit(): void {
    this.exampleName = this.exampleComponent?.nativeElement?.children?.[0]?.localName.replace('lab900-', '');
  }
}
