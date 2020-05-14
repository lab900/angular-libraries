import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenFormsComponent } from './model-driven-forms.component';

describe('ModelDrivenFormsComponent', () => {
  let component: ModelDrivenFormsComponent;
  let fixture: ComponentFixture<ModelDrivenFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelDrivenFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
