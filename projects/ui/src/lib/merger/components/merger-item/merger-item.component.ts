import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MergeConfig } from '../../models/merge-config.model';
import { isObservable, Observable, of } from 'rxjs';
import { CustomComponent, CustomComponentAbstract } from '../../abstracts/custom-component.abstract';

@Component({
  selector: 'lab900-merger-item',
  templateUrl: './merger-item.component.html',
  styleUrls: ['./merger-item.component.scss'],
})
export class Lab900MergerItemComponent<T> implements CustomComponentAbstract<T>, AfterViewInit, OnChanges {
  @Input()
  public config: MergeConfig<T>;

  @Input()
  public data: T;

  @Input()
  public active: boolean;

  @ViewChild('customComponentContainer', { read: ViewContainerRef })
  private customComponentContainer: ViewContainerRef;

  private customComponentRef: ComponentRef<CustomComponent<T>>;

  public constructor(private resolver: ComponentFactoryResolver) {}

  public get flexDirection(): 'row' | 'column' {
    if (this.config?.nextLine || this.config?.nestedObject) {
      return 'column';
    } else {
      return 'row';
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.customComponentRef) {
      this.customComponentRef.instance.data = this.data;
    }
  }

  public ngAfterViewInit(): void {
    if (this.config?.component) {
      this.createComponent();
    }
  }

  public display(config: MergeConfig<T>, parentAttribute?: string): Observable<any> {
    const value = parentAttribute ? this.data[parentAttribute][config.attribute] : this.data[config.attribute];
    const formattedValue = config?.formatter ? config.formatter(value) : value;
    return isObservable(formattedValue) ? formattedValue : of(formattedValue);
  }

  private createComponent(): void {
    const factory = this.resolver.resolveComponentFactory<CustomComponent<T>>(this.config.component);
    this.customComponentRef = this.customComponentContainer.createComponent(factory);
    setTimeout(() => {
      this.customComponentRef.instance.data = this.data;
      this.customComponentRef.location.nativeElement.style.width = '100%';
    });
  }
}
