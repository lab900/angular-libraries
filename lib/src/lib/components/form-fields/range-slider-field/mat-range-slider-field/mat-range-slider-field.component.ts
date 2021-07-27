import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as noUiSlider from 'nouislider';
import { BaseControlValueAccessorDirective } from '../../../../models/forms/BaseControlValueAccessor';

@Component({
  selector: 'lab900-mat-range-slider-field',
  templateUrl: './mat-range-slider-field.component.html',
  styleUrls: ['./nouislider.scss', './mat-range-slider-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MatRangeSliderFieldComponent,
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class MatRangeSliderFieldComponent
  extends BaseControlValueAccessorDirective<number[]>
  implements AfterViewInit, OnChanges
{
  private rangeSlider: noUiSlider.noUiSlider;
  private latestUnencodedValues: number[];

  @Input()
  public formControlName: string;

  @Input()
  public min = 0;

  @Input()
  public fromLabel = 'From';

  @Input()
  public toLabel = 'To';

  @Input()
  public steps?: number;

  @Input()
  public max = 100;

  @Input()
  public format = 'DEFAULT';

  public constructor(private el: ElementRef) {
    super();
  }

  public writeValue(value: any): void {
    this.value = value ? value : [this.min, this.max];
    this.latestUnencodedValues = this.value;
    if (this.rangeSlider) {
      setTimeout(() => {
        this.rangeSlider.set(value);
      });
    }
  }

  public ngAfterViewInit(): void {
    this.rangeSlider = noUiSlider.create(
      this.el.nativeElement.querySelector('.noUiSlider'),
      this.getSliderOptions()
    );
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
    const newValue = this.parseValue((event.target as any).value);
    this.updateSliderInstanceValues(
      0,
      newValue >= this.min ? newValue : this.min
    );
  }

  public updateToValue(event: InputEvent): void {
    const newValue = this.parseValue((event.target as any).value);
    this.updateSliderInstanceValues(
      1,
      newValue <= this.max ? newValue : this.max
    );
  }

  public parseValue(value: string): number {
    switch (this.format) {
      case 'K-M':
        value = `${value}`.toLowerCase().replace('k', '000');
        value = value.replace('m', '000000');
        value = value.replace(' ', '');
    }
    return Number(value) || 0;
  }

  public formatValue(value: number): string {
    switch (this.format) {
      case 'K-M':
        if (Math.abs(value) > 999999) {
          return Math.sign(value) * (Math.abs(value) / 1000000) + ' m';
        } else if (Math.abs(value) > 999) {
          return Math.sign(value) * (Math.abs(value) / 1000) + ' k';
        } else {
          return `${Math.sign(value) * Math.abs(value)}`;
        }
      default:
        return `${value}`;
    }
  }

  public attachSliderInstanceUpdateHandler(): void {
    this.rangeSlider.on(
      'update',
      (values: string[], handle: number, unencodedValues: number[]) => {
        unencodedValues = unencodedValues.map((value) => Math.round(value));
        if (
          unencodedValues[0] !== this.latestUnencodedValues[0] ||
          unencodedValues[1] !== this.latestUnencodedValues[1]
        ) {
          this.value = unencodedValues;
          this.latestUnencodedValues = this.value;
          this.onChange(this.value);
        }
      }
    );
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
