import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Pipe({
  name: 'authImage',
})
export class AuthImagePipe implements PipeTransform {
  constructor(private http: HttpClient) {}

  public async transform(src: string, headers: HttpHeaders): Promise<string> {
    if (!headers) {
      return new Promise((resolve) => resolve(src));
    }
    try {
      const imageBlob = await this.http.get(src, { headers, responseType: 'blob' }).toPromise();
      const reader = new FileReader();
      return new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(imageBlob);
      });
    } catch (e) {
      console.error(e);
    }
  }
}
