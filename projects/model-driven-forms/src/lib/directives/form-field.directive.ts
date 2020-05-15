import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputFieldComponent } from '../components/form-fields/input-field/input-field.component';
import { UnknownFieldComponent } from '../components/form-fields/unknown-field/unknown-field.component';
import { EditType } from '../models/editType';
import { FormField } from '../models/FormField';
import { IFormComponent } from '../models/IFormComponent';

const mapToComponent = (field: FormField): Type<IFormComponent> => {
  switch (field.editType) {
    case EditType.Input:
      return InputFieldComponent;
    default:
      return UnknownFieldComponent;
  }
};

@Directive({
  selector: '[lab900FormField]',
})
export class FormFieldDirective implements IFormComponent, OnChanges, OnInit {
  @Input() schema: FormField;
  @Input() group: FormGroup;
  component: ComponentRef<IFormComponent>;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.schema = this.schema;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    this.validateType();
    const component = this.resolver.resolveComponentFactory<IFormComponent>(mapToComponent(this.schema));
    this.component = this.container.createComponent(component);
    this.component.instance.schema = this.schema;
    this.component.instance.group = this.group;
  }

  private validateType() {
    if (!mapToComponent(this.schema)) {
      const supportedTypes = Object.keys(EditType).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.schema.editType}).
        Supported types: ${supportedTypes}`,
      );
    }
  }
}
