import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiShowcaseComponent } from './ui-showcase.component';

describe('UiShowcaseComponent', () => {
  let component: UiShowcaseComponent;
  let fixture: ComponentFixture<UiShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiShowcaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
