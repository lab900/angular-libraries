import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Lab900File } from '../models/Lab900File';
import { SubscriptionBasedDirective } from './subscription-based.directive';
import { Observable } from 'rxjs';

@Directive({
  selector: '[lab900AuthImage]',
})
export class AuthImageDirective extends SubscriptionBasedDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('image')
  private readonly image: Lab900File;

  @Input()
  private readonly httpCallback: (image: Lab900File) => Observable<Blob>;

  @Input()
  private readonly defaultImage: string;

  public constructor(private http: HttpClient, private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {
    super();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if ((changes.image || changes.httpCallback) && this.image?.imageSrc) {
      this.elementRef.nativeElement.classList.add('bg-loading');
      if (this.httpCallback == null) {
        this.setSrc(this.image.imageSrc);
      } else {
        this.addSubscription(
          this.httpCallback(this.image).pipe(
            map((imageBlob: Blob) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                const fileSrc = reader.result as string;
                this.setSrc(fileSrc);
                const image: HTMLImageElement = document.createElement('img');
                image.src = fileSrc;
                image.onload = () => image.remove();
                image.onerror = () => {
                  this.setPlaceholder();
                  image.remove();
                };
              };
              return reader.readAsDataURL(imageBlob);
            }),
          ),
          () => {},
        );
      }
    } else {
      this.setPlaceholder();
    }
  }

  private setPlaceholder(): void {
    if (this.defaultImage?.length) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', `url(${this.defaultImage})`);
      this.elementRef.nativeElement.classList.remove('bg-loading');
      this.elementRef.nativeElement.classList.add('bg-loaded');
    }
  }

  private setSrc(src: string): void {
    if (src?.length) {
      this.image.imageBase64 = src;
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', `url(${src})`);
      this.elementRef.nativeElement.classList.remove('bg-loading');
      this.elementRef.nativeElement.classList.add('bg-loaded');
    }
  }
}