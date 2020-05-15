import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAdminShowcaseComponent } from './angular-admin-showcase.component';

describe('AngularAdminShowcaseComponent', () => {
  let component: AngularAdminShowcaseComponent;
  let fixture: ComponentFixture<AngularAdminShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngularAdminShowcaseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAdminShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
