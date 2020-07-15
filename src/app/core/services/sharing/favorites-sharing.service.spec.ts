import { TestBed } from '@angular/core/testing';

import { FavoritesSharingService } from './favorites-sharing.service';

describe('FavoriteSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoritesSharingService = TestBed.get(FavoritesSharingService);
    expect(service).toBeTruthy();
  });
});
