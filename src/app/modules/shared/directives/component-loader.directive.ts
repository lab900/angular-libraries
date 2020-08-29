import { ComponentFactoryResolver, Directive, Input, OnChanges, SimpleChanges, Type, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[lab900ComponentLoader]',
})
export class ComponentLoaderDirective implements OnChanges {
  @Input()
  private lab900ComponentLoader: Type<any>;

  public constructor(public container: ViewContainerRef, private resolver: ComponentFactoryResolver) {}

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.lab900ComponentLoader) {
      this.loadComponent();
    }
  }

  private loadComponent() {
    const component = this.resolver.resolveComponentFactory(this.lab900ComponentLoader);
    this.container.createComponent(component);
  }
}
