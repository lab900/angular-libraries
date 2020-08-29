import { Component, Input, OnInit } from '@angular/core';
import { FileService } from '../../services/file.service';

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
export class ExampleViewerComponent implements OnInit {
  @Input()
  public extensions = ['HTML', 'TS', 'SCSS'];

  @Input()
  public filesPath: string;

  @Input()
  public exampleTitle: string;

  public examplesFolder = 'assets/examples/';

  public showSource = false;

  public constructor(private fileService: FileService) {}

  public ngOnInit(): void {}

  public trackExampleFile(index: number, file: ExampleFile): string {
    return file.extension;
  }

  public toggleSourceView(): void {
    this.showSource = !this.showSource;
  }
}
