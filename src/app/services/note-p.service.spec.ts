import { TestBed } from '@angular/core/testing';

import { NotePService } from './note-p.service';

describe('NotePService', () => {
  let service: NotePService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotePService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
