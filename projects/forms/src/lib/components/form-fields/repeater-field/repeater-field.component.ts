import { Component, OnInit, HostBinding } from '@angular/core';
import { FormComponent } from '../../../models/IFormComponent';
import { FormArray } from '@angular/forms';
import { RepeaterFieldOptions } from '../../../models/FormField';
import { Lab900FormBuilderService } from '../../../services/form-builder.service';

@Component({
  selector: 'lab900-repeater-field',
  templateUrl: './repeater-field.component.html',
  styleUrls: ['./repeater-field.component.scss'],
})
export class RepeaterFieldComponent extends FormComponent<RepeaterFieldOptions> implements OnInit {
  @HostBinding('class')
  public classList = 'lab900-form-field';

  public get addLabel(): string {
    return (this.options && this.options.addLabel) || 'Add new';
  }

  public get minRows(): number {
    return (this.options && this.options.minRows) || 1;
  }

  public get maxRows(): number {
    return this.options && this.options.maxRows;
  }

  public get fixedList(): boolean {
    return this.options && this.options.fixedList;
  }

  public get repeaterArray(): FormArray {
    return this.group.get(this.schema.attribute) as FormArray;
  }

  public constructor(private fb: Lab900FormBuilderService) {
    super();
  }

  public ngOnInit(): void {
    if (this.minRows) {
      for (let index = 0; index < this.minRows; index++) {
        this.addToArray();
      }
    }
  }

  public addToArray(): void {
    /*if (this.schema.nestedFields.length === 1 && !this.schema.nestedFields[0].attribute) {
      this.schema.nestedFields[0].attribute = this.repeaterArray.length as any;
      this.repeaterArray.push(new FormControl(''));
    } else {
    }*/
    this.repeaterArray.push(this.fb.createFormGroup(this.schema.nestedFields));
  }

  public removeFromArray(index: number): void {
    if (this.repeaterArray.length > this.minRows) {
      this.repeaterArray.removeAt(index);
    }
  }
}
