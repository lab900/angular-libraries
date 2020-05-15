import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsShowcaseComponent } from './forms-showcase.component';

describe('FormsShowcaseComponent', () => {
  let component: FormsShowcaseComponent;
  let fixture: ComponentFixture<FormsShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormsShowcaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
