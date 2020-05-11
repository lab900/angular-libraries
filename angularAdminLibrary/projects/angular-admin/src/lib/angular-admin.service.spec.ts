import { TestBed } from '@angular/core/testing';

import { AngularAdminService } from './angular-admin.service';

describe('AngularAdminService', () => {
  let service: AngularAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
