import { TestBed } from '@angular/core/testing';

import { ModelDrivenFormsService } from './model-driven-forms.service';

describe('ModelDrivenFormsService', () => {
  let service: ModelDrivenFormsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelDrivenFormsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
