import { Component, ElementRef, Input, OnChanges, SimpleChanges, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessorDirective } from 'projects/forms/src/lib/models/forms/BaseControlValueAccessor';
import * as noUiSlider from 'nouislider';

@Component({
  selector: 'lab900-mat-range-slider-field',
  templateUrl: './mat-range-slider-field.component.html',
  styleUrls: ['./mat-range-slider-field.component.scss'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: MatRangeSliderFieldComponent, multi: true }],
  encapsulation: ViewEncapsulation.None,
})
export class MatRangeSliderFieldComponent extends BaseControlValueAccessorDirective<number[]> implements AfterViewInit, OnChanges {
  private rangeSlider: noUiSlider.noUiSlider;
  private latestUnencodedValues: number[];

  @Input()
  public formControlName: string;

  @Input()
  public min = 0;

  @Input()
  public steps?: number;

  @Input()
  public max = 100;

  public constructor(private el: ElementRef) {
    super();
  }

  public writeValue(value: any): void {
    this.value = this.latestUnencodedValues = value ? value : [this.min, this.max];
    if (this.rangeSlider) {
      setTimeout(() => {
        this.rangeSlider.set(value);
      });
    }
  }

  public ngAfterViewInit(): void {
    this.rangeSlider = noUiSlider.create(this.el.nativeElement.querySelector('.noUiSlider'), this.getSliderOptions());
    this.attachSliderInstanceUpdateHandler();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (this.rangeSlider && (changes.min || changes.max)) {
      setTimeout(() => {
        this.rangeSlider.updateOptions({
          range: {
            min: this.min,
            max: this.max,
          },
        });
      });
    }
  }

  public updateSliderInstanceValues(key: number, value: number): void {
    if (value[key] !== this.latestUnencodedValues[key]) {
      this.value[key] = value;
      this.latestUnencodedValues = this.value;
      this.rangeSlider.set(this.value);
      this.onChange(this.value);
    }
  }

  public updateFromValue(event: InputEvent): void {
    const newValue = (event.target as any).value;
    this.updateSliderInstanceValues(0, newValue >= this.min ? newValue : this.min);
  }

  public updateToValue(event: InputEvent): void {
    const newValue = (event.target as any).value;
    this.updateSliderInstanceValues(1, newValue <= this.max ? newValue : this.max);
  }

  public attachSliderInstanceUpdateHandler(): void {
    this.rangeSlider.on('update', (values: string[], handle: number, unencodedValues: number[]) => {
      if (unencodedValues[0] !== this.latestUnencodedValues[0] || unencodedValues[1] !== this.latestUnencodedValues[1]) {
        this.value = unencodedValues;
        this.latestUnencodedValues = this.value;
        this.onChange(this.value);
      }
    });
  }

  private getSliderOptions(): noUiSlider.Options {
    let options: noUiSlider.Options = {
      start: this.value,
      connect: true,
      range: {
        min: this.min,
        max: this.max,
      },
    };

    if (typeof this.steps !== undefined) {
      options = {
        ...options,
        step: this.steps,
      };
    }
    return options;
  }
}
