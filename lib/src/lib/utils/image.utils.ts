import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Lab900File } from '../models/Lab900File';

export const fetchImageBase64 = (
  httpCallback: (image: Lab900File) => Observable<Blob>,
  image: Lab900File,
  callback: (result: string | ArrayBuffer | null) => void
): Observable<void> => {
  return httpCallback(image).pipe(
    map((imageBlob: Blob) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      return reader.readAsDataURL(imageBlob);
    })
  );
};
