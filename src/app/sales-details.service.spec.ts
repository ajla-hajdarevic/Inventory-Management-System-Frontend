import { TestBed } from '@angular/core/testing';

import { SalesDetailsService } from './sales-details.service';

describe('SalesDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesDetailsService = TestBed.get(SalesDetailsService);
    expect(service).toBeTruthy();
  });
});
