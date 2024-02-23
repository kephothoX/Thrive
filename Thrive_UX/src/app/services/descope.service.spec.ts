import { TestBed } from '@angular/core/testing';

import { DescopeService } from './descope.service';

describe('DescopeService', () => {
  let service: DescopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
