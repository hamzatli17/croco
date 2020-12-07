import { TestBed } from '@angular/core/testing';

import { EtdProfileService } from './etd-profile.service';

describe('EtdProfileService', () => {
  let service: EtdProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtdProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
