import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAdminComponent } from './angular-admin.component';

describe('AngularAdminComponent', () => {
  let component: AngularAdminComponent;
  let fixture: ComponentFixture<AngularAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
