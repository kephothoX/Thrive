import { TestBed } from '@angular/core/testing';

import { ThriveService } from './thrive.service';

describe('ThriveService', () => {
  let service: ThriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
