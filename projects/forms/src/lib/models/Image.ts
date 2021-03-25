import { HttpHeaders } from '@angular/common/http';

export interface Image extends File {
  imageSrc?: string;
  authHeaders?: HttpHeaders;
}
