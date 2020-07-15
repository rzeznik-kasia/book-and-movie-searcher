import { TestBed, async } from '@angular/core/testing';

import { BookEditionsService } from './book-editions.service';

describe('BookEditionsService', () => {
  let bookEditionsService: BookEditionsService;
  let mockHttp;
  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    bookEditionsService = new BookEditionsService(mockHttp);
  });

  it('should call http.get with the right url', () => {
    bookEditionsService.searchForBookEditions("lord");
    expect(mockHttp.get).toHaveBeenCalledWith('http://openlibrary.org/search.json?q=lord');
  });
})
