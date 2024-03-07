import { TestBed } from '@angular/core/testing';

import { SearchZipCodeService } from './search-zip-code.service';

describe('SearchZipCodeService', () => {
  let service: SearchZipCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchZipCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
