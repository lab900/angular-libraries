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

  public exampleFiles: ExampleFile[] = [];

  public examplesFolder = 'assets/examples/';

  public showSource = false;

  public constructor(private fileService: FileService) {}

  public ngOnInit(): void {
    this.fetchExampleFiles();
  }

  public trackExampleFile(index: number, file: ExampleFile): string {
    return file.extension;
  }

  public toggleSourceView(): void {
    this.showSource = !this.showSource;
  }

  private fetchExampleFiles(): void {
    for (const extension of this.extensions) {
      this.fileService.fetchFile(this.examplesFolder + this.filesPath + '.' + extension.toLowerCase()).subscribe(
        (data: string) => this.exampleFiles.push({
          extension,
          data,
          format: this.translateExtensionToFormat(extension),
        }),
      );
    }
  }

  private translateExtensionToFormat(extension: string): string {
    switch (extension.toLowerCase()) {
      case 'js':
        return 'javascript';
      case 'ts':
        return 'typescript';
      default:
        return extension;
    }
  }
}
