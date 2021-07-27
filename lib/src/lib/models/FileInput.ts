export class FileInput {
  private readonly _fileNames: string;

  constructor(private _files: File[] | null, private delimiter: string = ', ') {
    this._fileNames = (this._files || [])
      .map((f: File) => f.name)
      .join(delimiter);
  }

  get files(): File[] {
    return this._files || [];
  }

  get fileNames(): string {
    return this._fileNames;
  }
}
