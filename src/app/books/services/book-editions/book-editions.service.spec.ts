import { TestBed } from '@angular/core/testing';

import { BookEditionsService } from './book-editions.service';

describe('BookEditionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookEditionsService = TestBed.get(BookEditionsService);
    expect(service).toBeTruthy();
  });
});
