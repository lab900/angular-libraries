import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { MergeConfig } from '../../models/merge-config.model';
import { isObservable, Observable, of } from 'rxjs';
import { CustomComponent, CustomComponentAbstract } from '../../abstracts/custom-component.abstract';

@Component({
  selector: 'lab900-merger-item',
  templateUrl: './merger-item.component.html',
})
export class Lab900MergerItemComponent<T> implements CustomComponentAbstract<T>, AfterViewInit {
  @Input()
  public config: MergeConfig<T>;

  @Input()
  public data: T;

  @Input()
  public active: boolean;

  @ViewChild('customComponentContainer', { read: ViewContainerRef })
  private customComponentContainer: ViewContainerRef;

  private customComponentRef: ComponentRef<CustomComponent<T>>;

  constructor(private resolver: ComponentFactoryResolver) {}

  public ngAfterViewInit(): void {
    if (this.config?.component) {
      this.createComponent();
    }
  }

  public display(): Observable<any> {
    const formattedValue = this.config?.formatter
      ? this.config.formatter(this.data[this.config.attribute])
      : this.data[this.config.attribute];
    return isObservable(formattedValue) ? formattedValue : of(formattedValue);
  }

  private createComponent(): void {
    const factory = this.resolver.resolveComponentFactory<CustomComponent<T>>(this.config.component);
    this.customComponentRef = this.customComponentContainer.createComponent(factory);
    setTimeout(() => (this.customComponentRef.instance.data = this.data));
  }
}
