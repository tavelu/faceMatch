import { TestBed } from '@angular/core/testing';

import { AcuantServiceService } from './acuant-service.service';

describe('AcuantServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcuantServiceService = TestBed.get(AcuantServiceService);
    expect(service).toBeTruthy();
  });
});
